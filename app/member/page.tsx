import Head from 'next/head';
import labMembers  from '@/data/member';
import MemberCard from '@/components/card/memberCard';
import BigMemberCard from '@/components/card/bigMemberCard';

export default function Member() {
    const headLabMember = labMembers.find((member) => member.role === "Head Lab Member");
    const collaborators = labMembers.filter((member) => member.role === "Collaborator");
    const gradStudents = labMembers.filter((member) => member.role === "Grad Student");

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Lab Members</title>
                <meta name="description" content="Meet the members of our research lab." />
            </Head>

            <div className="pt-5 pb-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-8">
                        <span className="border-b-2 border-blue-600 pb-2">Members</span>
                    </h1>

                    <div className="mb-12">
                        {headLabMember && <BigMemberCard member={headLabMember} />}
                    </div>
                    <div className="p-6">
                        <h1 className="text-2xl font-bold mb-6">Graduate Students</h1>
                        <MemberCard members={gradStudents} />
                    </div>
                </div>
            </div>
        </div>

    );
}