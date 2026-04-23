import React from "react";

import { dashboardPluginMetadata } from "../../plugin-metadata.generated";
import { groupPluginsByCategory } from "../../plugin-metadata";

export function PluginHealthPage() {
  const sections = groupPluginsByCategory(dashboardPluginMetadata);
  const totalPlugins = sections.reduce((sum, section) => sum + section.total, 0);
  const totalSubcategories = sections.reduce((sum, section) => sum + section.subcategories.length, 0);
  const totalWarnings = sections.reduce((sum, section) => sum + section.warnings, 0);

  return (
    <section data-plugin-page="dashboard-plugin-health" className="awb-surface-stack">
      <div className="awb-inline-banner">
        <strong>Plugin health</strong>
        <span>Manifest-driven category coverage, dashboard bundling, and package discovery across the active first-party graph.</span>
      </div>
      <div className="awb-inline-grid awb-inline-grid-2">
        <div className="awb-form-card">
          <h3 className="awb-panel-title">Health snapshot</h3>
          <ul className="awb-check-list">
            <li>{totalPlugins} first-party plugins are represented in the active dashboard metadata snapshot.</li>
            <li>{sections.length} top-level dashboard categories are available for bundling and discovery.</li>
            <li>{totalWarnings === 0 ? "No category fallback warnings are active in the current graph." : `${totalWarnings} plugin records are using the uncategorized fallback.`}</li>
          </ul>
        </div>
        <div className="awb-form-card">
          <h3 className="awb-panel-title">Category coverage</h3>
          <dl className="awb-detail-grid">
            <div>
              <dt>Categories</dt>
              <dd>{sections.length}</dd>
            </div>
            <div>
              <dt>Subcategories</dt>
              <dd>{totalSubcategories}</dd>
            </div>
            <div>
              <dt>Fallbacks</dt>
              <dd>{totalWarnings}</dd>
            </div>
            <div>
              <dt>Ready for dashboard bundling</dt>
              <dd>{totalPlugins - totalWarnings}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="awb-inline-grid awb-inline-grid-2">
        {sections.map((section) => (
          <div key={section.categoryId} className="awb-form-card">
            <h3 className="awb-panel-title">{section.categoryLabel}</h3>
            <p className="awb-muted-copy">
              {section.total} plugins across {section.subcategories.length} dashboard bundles.
            </p>
            <div className="awb-surface-stack">
              {section.subcategories.map((subcategory) => (
                <div key={subcategory.subcategoryId}>
                  <strong>{subcategory.subcategoryLabel}</strong>
                  <ul className="awb-check-list">
                    {subcategory.plugins.map((plugin) => (
                      <li key={plugin.id}>
                        <strong>{plugin.displayName}</strong>: {plugin.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
