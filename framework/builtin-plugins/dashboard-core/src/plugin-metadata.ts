import {
  defaultPluginCategory,
  getPluginCategoryDefinition,
  pluginCategoryOrder,
  type PluginCategory
} from "@platform/kernel";

export type DashboardPluginMetadataInput = {
  id: string;
  displayName: string;
  description: string;
  domainGroup: string;
  defaultCategory?: PluginCategory | undefined;
  repoName?: string | undefined;
  trustTier?: string | undefined;
  reviewTier?: string | undefined;
  maturity?: string | undefined;
};

export type DashboardPluginMetadata = DashboardPluginMetadataInput & {
  defaultCategory: PluginCategory;
  warning?: string | undefined;
};

export type DashboardPluginCategorySection = {
  categoryId: string;
  categoryLabel: string;
  iconToken: string;
  total: number;
  warnings: number;
  subcategories: Array<{
    subcategoryId: string;
    subcategoryLabel: string;
    total: number;
    plugins: DashboardPluginMetadata[];
  }>;
};

export const pluginCategoryFallbackWarning =
  "Missing or invalid plugin category metadata; falling back to Platform Governance / Uncategorized.";

export function normalizeDashboardPluginMetadata(entry: DashboardPluginMetadataInput): DashboardPluginMetadata {
  const categoryDefinition = entry.defaultCategory ? getPluginCategoryDefinition(entry.defaultCategory.id) : undefined;
  const subcategoryDefinition = categoryDefinition?.subcategories.find(
    (candidate) => candidate.id === entry.defaultCategory?.subcategoryId
  );

  if (
    !entry.defaultCategory ||
    !categoryDefinition ||
    !subcategoryDefinition ||
    entry.defaultCategory.label !== categoryDefinition.label ||
    entry.defaultCategory.subcategoryLabel !== subcategoryDefinition.label
  ) {
    return {
      ...entry,
      defaultCategory: defaultPluginCategory,
      warning: pluginCategoryFallbackWarning
    };
  }

  return {
    ...entry,
    defaultCategory: entry.defaultCategory
  };
}

export function groupPluginsByCategory(entries: readonly DashboardPluginMetadataInput[]): DashboardPluginCategorySection[] {
  const normalized = entries
    .map((entry) => normalizeDashboardPluginMetadata(entry))
    .sort((left, right) => left.displayName.localeCompare(right.displayName));

  const sections: DashboardPluginCategorySection[] = [];

  for (const categoryId of pluginCategoryOrder) {
    const categoryDefinition = getPluginCategoryDefinition(categoryId);
    if (!categoryDefinition) {
      continue;
    }

    const categoryPlugins = normalized.filter((entry) => entry.defaultCategory.id === categoryId);
    if (!categoryPlugins.length) {
      continue;
    }

    const subcategories: DashboardPluginCategorySection["subcategories"] = [];
    for (const subcategory of categoryDefinition.subcategories) {
      const plugins = categoryPlugins.filter((entry) => entry.defaultCategory.subcategoryId === subcategory.id);
      if (!plugins.length) {
        continue;
      }

      subcategories.push({
        subcategoryId: subcategory.id,
        subcategoryLabel: subcategory.label,
        total: plugins.length,
        plugins
      });
    }

    sections.push({
      categoryId: categoryDefinition.id,
      categoryLabel: categoryDefinition.label,
      iconToken: categoryDefinition.iconToken,
      total: categoryPlugins.length,
      warnings: categoryPlugins.filter((entry) => Boolean(entry.warning)).length,
      subcategories
    });
  }

  return sections;
}
