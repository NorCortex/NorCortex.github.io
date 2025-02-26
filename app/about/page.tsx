import Image from "next/image";
import profileData from "@/data/profile";
import Education from "@/components/about/education";
import Research from "@/components/about/research";
import Awards from "@/components/about/awards";

const About = () => {
    const { image, name, description, education, researchInterests, awards } = profileData;

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-12 bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                    <Image
                        src={image}
                        alt={name}
                        width={150}
                        height={150}
                        className="rounded-full shadow-lg object-cover border-2"
                    />
                </div>

                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <p className="text-gray-700 leading-relaxed">
                        I'm an Assistant Professor at the <a
                            href="https://www.ict.mahidol.ac.th/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Faculty of Information and Communication Technology, Mahidol University
                        </a>.  I complete my Ph.D. from   <a
                            href="https://www.northwestern.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Northwestern University
                        </a> in 2018 under the supervision under   <a
                            href="https://users.cs.northwestern.edu/~ddowney/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Doug Downey
                        </a>.
                        My research interests include natural language processing and machine learning.
                    </p>
                </div>
            </div>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    🎓 Education
                </h2>
                <Education education={education} />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    🔬 Research Interests
                </h2>
                <Research researchInterests={researchInterests} />
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🏆 Awards</h2>
                <Awards awards={awards} />
            </section>
        </div>
    );
};

export default About;
