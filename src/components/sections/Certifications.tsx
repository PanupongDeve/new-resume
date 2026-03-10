
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

interface Certification {
    id: string;
    title: string;
    issuer: string;
    issuerColor?: string;
    issuedDate: string;
    expiryDate: string | null;
    credentialUrl: string;
}

const certifications: Certification[] = [
    {
        id: "prompt-design-bard",
        title: "Prompt Design with Bard AI",
        issuer: "DataRockie | The School of Generalist",
        issuerColor: "text-yellow-400",
        issuedDate: "Feb 2026",
        expiryDate: null,
        credentialUrl: "https://drive.google.com/file/d/17P_QIL0XZrmVHHhESBbxkqxGfg_rElwJ/view",
    },
    {
        id: "ai-boost-gemini",
        title: "AI Boost Bites: Gemini Gems – Your ultimate marketing sidekick",
        issuer: "Google",
        issuerColor: "text-blue-400",
        issuedDate: "Feb 2026",
        expiryDate: null,
        credentialUrl: "https://www.skills.google/public_profiles/d13a4f9f-4523-4b42-a34e-a8659aa720b9/badges/22625328?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
        id: "claude-code-action",
        title: "Claude Code in Action",
        issuer: "Anthropic",
        issuerColor: "text-amber-400",
        issuedDate: "Feb 2026",
        expiryDate: null,
        credentialUrl: "https://verify.skilljar.com/c/245zjiewmyn2",
    },
    {
        id: "google-sre-culture",
        title: "Developing a Google SRE Culture",
        issuer: "Coursera",
        issuerColor: "text-blue-400",
        issuedDate: "Jul 2023",
        expiryDate: null,
        credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/7Z8J8ABPVLM3",
    },
    {
        id: "monitoring-telemetry",
        title: "Monitoring & Telemetry for Production Systems",
        issuer: "Coursera",
        issuerColor: "text-blue-400",
        issuedDate: "Oct 2022",
        expiryDate: null,
        credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/UHSCLULLA53V",
    },
    {
        id: "k8s-hard-way",
        title: "Kubernetes the Hard Way",
        issuer: "A Cloud Guru | A Pluralsight Company",
        issuerColor: "text-orange-400",
        issuedDate: "Oct 2021",
        expiryDate: null,
        credentialUrl: "https://verify.acloud.guru/E2DC12FA6437",
    },
    {
        id: "terraform-associate",
        title: "HashiCorp Certified Terraform Associate",
        issuer: "A Cloud Guru | A Pluralsight Company",
        issuerColor: "text-purple-400",
        issuedDate: "Oct 2021",
        expiryDate: null,
        credentialUrl: "https://verify.acloud.guru/422D0854298D",
    },
    {
        id: "devsecops-essentials",
        title: "DevSecOps Essentials",
        issuer: "A Cloud Guru | A Pluralsight Company",
        issuerColor: "text-orange-400",
        issuedDate: "Nov 2021",
        expiryDate: null,
        credentialUrl: "https://verify.acloud.guru/B8497CC61A7F",
    },
    {
        id: "fullstack-react-coursera",
        title: "Full-Stack Web Development with React",
        issuer: "Coursera",
        issuerColor: "text-blue-400",
        issuedDate: "Jul 2022",
        expiryDate: null,
        credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/BZ28TSUCLH9T",
    },
    {
        id: "react-udemy",
        title: "Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)",
        issuer: "Udemy",
        issuerColor: "text-purple-400",
        issuedDate: "Mar 2022",
        expiryDate: null,
        credentialUrl: "https://www.udemy.com/certificate/UC-fef543dd-da89-4b54-9e46-14798a6e2d14",
    },
    {
        id: "aws-saa",
        title: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services (AWS)",
        issuerColor: "text-orange-400",
        issuedDate: "Aug 2021",
        expiryDate: "Aug 2024",
        credentialUrl: "https://www.credly.com/badges/6ec77c52-0d50-498a-8052-a6d70d4f5c01?source=linked_in_profile",
    },
];

export function Certifications() {
    return (
        <section id="certifications" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <Badge variant="outline" className="px-4 py-1 text-primary border-primary/30">
                        CERTIFICATIONS
                    </Badge>
                    <h2 className="text-4xl font-bold tracking-tight">Course &amp; Certificate</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Professional certifications and courses that demonstrate my expertise and commitment to continuous learning.
                    </p>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {certifications.map((cert) => (
                        <Card
                            key={cert.id}
                            className="group flex flex-col bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                        >
                            <CardContent className="flex flex-col flex-1 pt-6 gap-4">
                                {/* Icon */}
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                                    <Award className="w-6 h-6 text-primary" />
                                </div>

                                {/* Title & Issuer */}
                                <div className="flex-1 space-y-1">
                                    <h3 className="font-bold text-base leading-snug group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className={`text-sm font-semibold ${cert.issuerColor ?? "text-muted-foreground"}`}>
                                        {cert.issuer}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        Issued {cert.issuedDate}
                                        {cert.expiryDate
                                            ? ` · Expires ${cert.expiryDate}`
                                            : " · No Expiration Date"}
                                    </p>
                                </div>

                                {/* Show Credential Button */}
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="w-full gap-2 rounded-full font-semibold mt-auto"
                                >
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Show credential
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
