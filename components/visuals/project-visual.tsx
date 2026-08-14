"use client";

export function ProjectVisual({ project }: { project: "flagship" | "kutira" | "health" }) {
  const dots = 8;
  const healthStages = ["Data", "Organize", "Manage", "Access"];

  // Custom colors and gradients for each project
  const bgStyle = project === "flagship" 
    ? "bg-[#080d19] sm:min-h-[380px] lg:min-h-full flex flex-col justify-between p-6 sm:p-8" 
    : project === "health"
    ? "bg-[radial-gradient(circle_at_75%_25%,rgba(99,102,241,.17),transparent_22%),linear-gradient(135deg,#0a122c,#050917)]"
    : "bg-[radial-gradient(circle_at_75%_25%,rgba(91,223,218,.17),transparent_18%),linear-gradient(135deg,#111b2a,#0a101d)]";

  if (project === "flagship") {
    const workflowStages = [
      {
        num: "01",
        label: "INPUT",
        title: "Resume / Candidate",
        status: "input",
        tasks: ["Candidate File Upload", "PDF/DOCX Document Source"]
      },
      {
        num: "02",
        label: "PROCESSING",
        title: "Analysis & Parsing",
        status: "processing",
        tasks: ["Resume Parsing (NLP)", "ATS Compatibility Evaluation", "Feature/Skill Extraction"]
      },
      {
        num: "03",
        label: "INTELLIGENCE",
        title: "AI Simulation",
        status: "intelligence",
        tasks: ["Adaptive Question Gen", "Mock Interview Loop", "Speech & Expression Analysis"]
      },
      {
        num: "04",
        label: "OUTPUT",
        title: "Feedback Engine",
        status: "feedback",
        tasks: ["Personalized Insights", "Performance Feedback", "Resume Suggestions"]
      }
    ];

    return (
      <div className={`relative overflow-hidden border-b border-white/10 ${bgStyle}`} aria-label="Flagship system workflow diagram">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(127,159,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(127,159,255,.05)_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* Header bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-3">
          <span className="font-mono text-[9px] uppercase tracking-[.2em] text-indigo-200/50">System Architecture // Pipeline</span>
          <div className="flex items-center gap-1.5 font-mono text-[8px] tracking-[.1em] text-cyan-400/80">
            <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Active Workflow
          </div>
        </div>

        {/* Workflow Diagram */}
        <div className="relative z-10 my-auto grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 items-stretch py-6">
          {workflowStages.map((stage, idx) => (
            <div 
              key={stage.num}
              className="group/node relative flex flex-col justify-between rounded-sm border border-white/10 bg-[#0c1222]/80 p-3.5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0f182c]"
            >
              {/* Connector line for large screens */}
              {idx < 3 && (
                <div className="absolute right-[-7px] top-1/2 hidden lg:block z-20 h-px w-[14px] bg-gradient-to-r from-cyan-400/30 to-indigo-400/30 pointer-events-none" />
              )}
              
              <div>
                <div className="flex items-center justify-between font-mono text-[8px] tracking-[.15em] text-slate-500">
                  <span>{stage.num} / {stage.label}</span>
                  <span className="size-1 rounded-full bg-cyan-400 opacity-60" />
                </div>
                <h4 className="mt-2 font-display text-xs font-semibold tracking-wide text-white group-hover/node:text-cyan-200 transition-colors">
                  {stage.title}
                </h4>
              </div>

              <ul className="mt-3.5 space-y-1.5 border-t border-white/5 pt-3">
                {stage.tasks.map((task) => (
                  <li key={task} className="font-mono text-[8px] leading-relaxed text-slate-400">
                    • {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer info panel */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-3 font-mono text-[8px] uppercase tracking-[.12em] text-slate-500">
          <span>End-to-End Pipeline</span>
          <span>Async Event driven</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative min-h-52 overflow-hidden border-b border-white/10 ${bgStyle}`}>
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(127,159,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(127,159,255,.08)_1px,transparent_1px)] [background-size:28px_28px]" />
      
      {/* Scan line effect */}
      <div
        className="absolute left-[16%] top-[25%] h-[1px] w-[68%] origin-left bg-gradient-to-r from-transparent via-indigo-300/70 to-cyan-200/40"
        style={{ animation: "scan-line 5s ease-in-out infinite" }}
      />
      
      {/* Animated network dots */}
      {Array.from({ length: dots }).map((_, i) => {
        const left = 10 + ((i * 37) % 78);
        const top = 18 + ((i * 53) % 62);
        return (
          <span
            key={i}
            className={`absolute size-1.5 rounded-full ${project === "health" ? "bg-indigo-300/80" : "bg-indigo-200"}`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animation: `pulse-dot ${2.8 + (i % 4)}s ease-in-out ${i * 0.12}s infinite`,
            }}
          />
        );
      })}

      {project === "health" ? (
        <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
          <div className="mb-3.5 flex items-center justify-between font-mono text-[9px] uppercase tracking-[.15em] text-indigo-100/50">
            <span>data lifecycle / 03</span>
            <span>structured pipeline</span>
          </div>
          <div className="grid grid-cols-4 border-y border-indigo-100/10 bg-slate-950/30">
            {healthStages.map((stage, index) => (
              <div key={stage} className="relative px-1.5 py-1.5 text-center font-mono text-[8px] uppercase tracking-[.09em] text-indigo-100/60 sm:text-[9px]">
                <span
                  className="mr-1 inline-block size-1.5 rounded-full bg-indigo-300 align-middle"
                  style={{ animation: `stage-pulse 2.2s ease-in-out ${index * 0.22}s infinite` }}
                />
                {stage}
                {index < healthStages.length - 1 ? (
                  <span className="absolute -right-1 top-1/2 z-10 -translate-y-1/2 text-indigo-200/40">→</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[.18em] text-indigo-100/60">
          system map / kutira-kushala
        </div>
      )}
    </div>
  );
}
