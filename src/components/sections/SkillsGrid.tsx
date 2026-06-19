"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProgressArc } from "@/components/ui/ProgressArc";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES, SKILLS_DATA } from "@/data/skills";
import type { Skill, SkillCategory } from "@/types";

function SkillCategorySection({
  category,
  skills,
  index,
}: {
  category: SkillCategory;
  skills: Skill[];
  index: number;
}) {
  const meta = SKILL_CATEGORIES[category];

  return (
    <GlassCard delay={index * 0.15} className="col-span-1 md:col-span-2 lg:col-span-1">
      <div
        className={`mb-6 h-1 w-16 rounded-full bg-gradient-to-r ${meta.color}`}
      />
      <h3 className="text-lg font-bold text-foreground">{meta.label}</h3>
      <p className="mt-2 text-sm text-muted">{meta.description}</p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
        {skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: skillIndex * 0.05 }}
            className="flex flex-col items-center"
          >
            <ProgressArc value={skill.proficiency} size={56} label={skill.name} />
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill.id} variant="accent">
            {skill.name}
          </Badge>
        ))}
      </div>
    </GlassCard>
  );
}

export function SkillsGrid() {
  const categories = Object.keys(SKILL_CATEGORIES) as SkillCategory[];

  return (
    <section className="relative py-24 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Ecosystem"
          title="Skills Directory"
          description="A curated stack spanning mobile architecture, backend systems, and developer tooling — each honed through production work and continuous learning."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <SkillCategorySection
              key={category}
              category={category}
              skills={SKILLS_DATA.filter((s) => s.category === category)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
