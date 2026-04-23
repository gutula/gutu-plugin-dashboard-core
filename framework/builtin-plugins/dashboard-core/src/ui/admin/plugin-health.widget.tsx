import React from "react";

import { dashboardPluginMetadata } from "../../plugin-metadata.generated";
import { groupPluginsByCategory } from "../../plugin-metadata";

export function PluginHealthWidget() {
  const sections = groupPluginsByCategory(dashboardPluginMetadata);
  const totalPlugins = sections.reduce((sum, section) => sum + section.total, 0);
  const totalWarnings = sections.reduce((sum, section) => sum + section.warnings, 0);

  return (
    <section data-plugin-widget="dashboard-plugin-health" className="awb-widget-spotlight">
      <h3 className="awb-panel-title">Plugin health</h3>
      <p className="awb-muted-copy">Dashboard bundling is driven by manifest categories instead of hardcoded plugin lists.</p>
      <div className="awb-inline-grid awb-inline-grid-2">
        <div className="awb-mini-stat">
          <span className="awb-mini-stat-label">Plugins</span>
          <strong className="awb-mini-stat-value">{totalPlugins}</strong>
        </div>
        <div className="awb-mini-stat">
          <span className="awb-mini-stat-label">Categories</span>
          <strong className="awb-mini-stat-value">{sections.length}</strong>
        </div>
      </div>
      <p className="awb-muted-copy">
        {totalWarnings === 0 ? "All plugin records carry an explicit default category." : `${totalWarnings} plugins are using the uncategorized fallback.`}
      </p>
    </section>
  );
}
