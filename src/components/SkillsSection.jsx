import { cn } from "../lib/utils"
import { useState } from "react"

const skills =[ 
   // --- Core Programming Languages ---
  { name: 'Python', level: 80, category: 'all' }, 
  { name: 'JavaScript', level: 60, category: 'all' }, 

  // --- AI/ML ---
  { name: 'Machine Learning', level: 75, category: 'ai/ml' },
  { name: 'Large Language Models (LLMs)', level: 70, category: 'ai/ml' },
  { name: 'Deep Learning', level: 65, category: 'ai/ml' },
  { name: 'Natural Language Processing (NLP)', level: 65, category: 'ai/ml' },

  // --- Data Science ---
  { name: 'Data Wrangling & Cleaning', level: 75, category: 'data' },
  { name: 'SQL', level: 70, category: 'data' },
  { name: 'Data Visualization', level: 70, category: 'data' },

  // --- Front-End Web Development ---
  { name: 'React.js', level: 55, category: 'front-end' },
  { name: 'Next.js', level: 50, category: 'front-end' },

  // --- Back-End & Cloud/DevOps ---
  { name: 'API Development (RESTful)', level: 50, category: 'back-end' },
  { name: 'Cloud Platforms (AWS/GCP/Azure)', level: 40, category: 'back-end' }, 

  // --- Tools ---
  { name: 'Git & GitHub', level: 80, category: 'tools' },
  { name: 'Jupyter Notebooks', level: 85, category: 'tools' }
];



const categories = ["all", , "ai/ml", "front-end", "back-end", "data", "tools"]

export const SkillsSection = () => { 
    const [activeCategory, setActiveCategory] = useState("all")
    
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

    return ( 
        <section id="skills" className="py-24 px-4 relative bg-secondary">

            <div className="container mx-auto max-w-5-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> 
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => ( 
                        <button 
                        onClick={() => setActiveCategory(category)}
                        key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")
                        }>
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => ( 
                        <div key ={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                            style={{width: `${skill.level}%`}}
                            />
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        
                        </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )

}