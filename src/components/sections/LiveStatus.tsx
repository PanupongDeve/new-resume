
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, CheckCircle2, Clock, GitBranch, Terminal as TerminalIcon, ShieldCheck } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";

const mockLogs = [
  "[14:20:01] INFO: Initiating GitOps sync for 'nexus-production'...",
  "[14:20:03] INFO: Comparing desired state vs current cluster state.",
  "[14:20:05] WARN: Resource 'deployment/web' differs. Patching...",
  "[14:20:10] INFO: Applying changes to Kubernetes namespace 'prod'.",
  "[14:20:15] INFO: Rolling update in progress: 3/3 pods healthy.",
  "[14:20:20] SUCCESS: Environment synchronized successfully.",
  "[14:20:22] INFO: Deployment metadata: commit-8f12a45 - 2024-03-20 14:20",
  "[14:25:01] INFO: Health check monitoring started...",
  "[14:25:05] INFO: Endpoint /api/health returned 200 OK.",
  "[14:25:06] INFO: CPU Load: 12% | Memory Usage: 340MB",
];

export function LiveStatus() {
  const [logs, setLogs] = React.useState<string[]>([]);
  const [progress, setProgress] = React.useState(100);

  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < mockLogs.length) {
        setLogs(prev => [...prev, mockLogs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="live-status" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Activity className="text-accent w-8 h-8" />
              Real-time Portfolio Health
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              This website is a live demonstration of my automated infrastructure. 
              Below is the current state of the GitOps pipeline managing this very environment.
            </p>
          </div>
          <Badge className="bg-green-500/10 text-green-500 border-green-500/20 py-1.5 px-4 text-sm font-code flex gap-2">
            <ShieldCheck className="w-4 h-4" /> SECURE_ENV_SYNCED
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 bg-background/50 border-border overflow-hidden">
            <CardHeader className="bg-muted/30 border-b border-border flex flex-row items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <TerminalIcon className="w-5 h-5 text-primary" />
                <span className="font-code text-sm font-bold">DEPLOYMENT_LOGS_STREAM</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[350px] w-full bg-black/40 p-6">
                <div className="font-code text-sm space-y-2 text-green-400/90">
                  {logs.map((log, i) => (
                    <div key={i} className="animate-in fade-in slide-in-from-left-2 duration-300">
                      <span className="text-muted-foreground mr-2">&gt;</span>
                      {log}
                    </div>
                  ))}
                  <div className="animate-pulse inline-block w-2 h-4 bg-accent ml-1 align-middle" />
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  Cluster Metrics
                  <Activity className="w-4 h-4 text-accent" />
                </CardTitle>
                <CardDescription>Live telemetry data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Resource Efficiency</span>
                    <span className="text-accent font-bold">94%</span>
                  </div>
                  <Progress value={94} className="h-1.5" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Node Stability</span>
                    <span className="text-green-400 font-bold">100%</span>
                  </div>
                  <Progress value={100} className="h-1.5 bg-secondary" />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <p className="text-2xl font-bold">12ms</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Latency</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">0</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Failures</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  Vercel CD Status
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GitBranch className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">main</p>
                    <p className="text-xs text-muted-foreground">Branch Tracking</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold">2m ago</p>
                    <p className="text-xs text-muted-foreground">Last Check</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
