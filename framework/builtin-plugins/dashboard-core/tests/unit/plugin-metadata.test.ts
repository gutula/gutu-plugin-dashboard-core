import { describe, expect, it } from "bun:test";

import { groupPluginsByCategory, normalizeDashboardPluginMetadata } from "../../src/plugin-metadata";

describe("dashboard plugin metadata", () => {
  it("groups plugins by category and subcategory", () => {
    const sections = groupPluginsByCategory([
      {
        id: "payments-core",
        displayName: "Payments Core",
        description: "Payments surface.",
        domainGroup: "Operational Data",
        defaultCategory: {
          id: "business",
          label: "Business",
          subcategoryId: "payments",
          subcategoryLabel: "Payments"
        }
      },
      {
        id: "auth-core",
        displayName: "Auth Core",
        description: "Auth surface.",
        domainGroup: "Platform Backbone",
        defaultCategory: {
          id: "user_management",
          label: "User Management",
          subcategoryId: "authentication",
          subcategoryLabel: "Authentication"
        }
      }
    ]);

    expect(sections.map((entry) => entry.categoryId)).toEqual(["user_management", "business"]);
    expect(sections[1]?.subcategories[0]?.plugins[0]?.id).toBe("payments-core");
  });

  it("falls back to uncategorized when category metadata is missing", () => {
    const plugin = normalizeDashboardPluginMetadata({
      id: "legacy-plugin",
      displayName: "Legacy Plugin",
      description: "Legacy surface.",
      domainGroup: "Platform Backbone"
    });

    expect(plugin.defaultCategory.id).toBe("platform_governance");
    expect(plugin.defaultCategory.subcategoryId).toBe("uncategorized");
    expect(plugin.warning).toBeTruthy();
  });
});
