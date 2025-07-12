import { Code, Brain, Zap } from "lucide-react"

export const AboutSection = () => { 

    return ( 
        <section id="about" className = "py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5-xl">
                <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semi-bold">
                            Passionate AI Engineer at the intersection of AI and Human Potential
                        </h3>
                        <p className="text-muted-foreground">As an AI enthusiast, I'm driven by curiosity to explore the frontiers of artificial intelligence. My work focuses on developing robust algorithms and models that don't just process information, but truly learn and evolve. I'm committed to contributing to the next generation of AI advancements, shaping a smarter future through code and creativity.</p>
                        <p className="text-muted-foreground">Beyond the algorithms and datasets, I'm particularly interested in the ethical implications of large language models, optimizing model performance for real-world applications, and developing data-driven strategies that empower businesses. I'm always on the lookout for opportunities to collaborate on impactful projects and expand my understanding of AI's ever-evolving landscape. My goal is to leverage my skills to contribute meaningfully to the advancement of intelligent technologies.</p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get in Touch</a>
                            <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-2">AI Development</h4>
                                    <p className="text-muted-foreground">Building intelligent systems and machine learning models that solve real-world problems.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Brain className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-2">Machine Learning</h4>
                                    <p className="text-muted-foreground">Developing algorithms and models that learn from data and make intelligent decisions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Zap className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-2">Performance Optimization</h4>
                                    <p className="text-muted-foreground">Optimizing AI models for speed, efficiency, and real-world deployment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}