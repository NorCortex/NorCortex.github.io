import publications  from "@/data/norPublications";

export default function Publication() {

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Publications</h1>
            <ul className="list-none text-gray-700">
                {publications.map((publication, index) => (
                    <li key={index} className="mb-2">
                        <a
                            href={publication.link}
                            className="text-blue-600 hover:underline"
                        >
                            {publication.title}
                        </a>
                        <p className="text-gray-600">
                            {publication.author}
                        </p>
                        <p className="text-gray-600">
                            <em>{publication.conference}</em>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}