import React from 'react';
import { ChevronDown, Info } from 'lucide-react';

/**
 * Renders a project's architecture as a stacked flow of layers.
 * Data shape: { layers: [{ label, nodes: [string] }], note?: string }
 */
const ArchitectureDiagram = ({ flow }) => {
  if (!flow || !flow.layers || flow.layers.length === 0) return null;

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/40 p-4 md:p-6">
      <div className="overflow-x-auto">
        <div className="min-w-[280px]">
          {flow.layers.map((layer, i) => (
            <div key={i}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <div className="md:w-32 md:flex-shrink-0">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {layer.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.nodes.map((node, j) => (
                    <span
                      key={j}
                      className="px-3 py-2 rounded-lg bg-white dark:bg-slate-700 border border-indigo-200 dark:border-indigo-500/40 text-sm font-medium text-slate-800 dark:text-slate-100 shadow-sm"
                    >
                      {node}
                    </span>
                  ))}
                </div>
              </div>

              {i < flow.layers.length - 1 && (
                <div className="flex md:pl-32 py-1" aria-hidden="true">
                  <div className="md:ml-4 flex flex-col items-center text-indigo-400 dark:text-indigo-500">
                    <div className="w-px h-3 bg-indigo-300 dark:bg-indigo-600" />
                    <ChevronDown size={14} className="-mt-1" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {flow.note && (
        <div className="mt-4 flex items-start gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
          <Info size={16} className="mt-0.5 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
          <p className="text-sm text-slate-600 dark:text-slate-300">{flow.note}</p>
        </div>
      )}
    </div>
  );
};

export default ArchitectureDiagram;
