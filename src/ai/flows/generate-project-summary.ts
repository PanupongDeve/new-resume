'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating concise, business-oriented project summaries from technical details.
 *
 * - generateProjectSummary - A function that handles the project summary generation process.
 * - GenerateProjectSummaryInput - The input type for the generateProjectSummary function.
 * - GenerateProjectSummaryOutput - The return type for the generateProjectSummary function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateProjectSummaryInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  technicalDetails: z.string().describe('Detailed technical description of the project, including technologies used (e.g., Kubernetes, Terraform, Argo CD), architectural decisions, and implementation specifics.'),
  challenge: z.string().optional().describe('Describe any specific technical or business challenges faced during the project and how they were overcome.'),
  solutionsImplemented: z.string().optional().describe('Describe the specific solutions or features implemented.'),
  measurableImpact: z.string().optional().describe('Quantifiable results or improvements achieved (e.g., reduced costs, increased deployment speed, improved reliability, downtime reduction).'),
});
export type GenerateProjectSummaryInput = z.infer<typeof GenerateProjectSummaryInputSchema>;

const GenerateProjectSummaryOutputSchema = z.object({
  businessSummary: z.string().describe('A concise, business-oriented summary of the project, highlighting its value and impact for non-technical audiences.'),
  keywords: z.array(z.string()).describe('A list of relevant keywords for the project summary.'),
});
export type GenerateProjectSummaryOutput = z.infer<typeof GenerateProjectSummaryOutputSchema>;

export async function generateProjectSummary(input: GenerateProjectSummaryInput): Promise<GenerateProjectSummaryOutput> {
  return generateProjectSummaryFlow(input);
}

const generateProjectSummaryPrompt = ai.definePrompt({
  name: 'generateProjectSummaryPrompt',
  input: { schema: GenerateProjectSummaryInputSchema },
  output: { schema: GenerateProjectSummaryOutputSchema },
  prompt: `You are an experienced Senior DevOps Engineer and Cloud Architect with a strong business acumen. Your task is to transform technical project details into a concise, business-oriented summary that highlights the value and impact of the work. This summary should be suitable for non-technical audiences like recruiters and potential clients. Emphasize quantifiable results, cost savings, improved efficiency, reliability, and speed.

Project Name: {{{projectName}}}

Technical Details: {{{technicalDetails}}}

{{#if challenge}}
Challenges Faced: {{{challenge}}}
{{/if}}

{{#if solutionsImplemented}}
Solutions Implemented: {{{solutionsImplemented}}}
{{/if}}

{{#if measurableImpact}}
Measurable Impact: {{{measurableImpact}}}
{{/if}}

Based on the provided information, generate a business-oriented summary and a list of keywords.
`,
});

const generateProjectSummaryFlow = ai.defineFlow(
  {
    name: 'generateProjectSummaryFlow',
    inputSchema: GenerateProjectSummaryInputSchema,
    outputSchema: GenerateProjectSummaryOutputSchema,
  },
  async (input) => {
    const { output } = await generateProjectSummaryPrompt(input);
    return output!;
  }
);
