import DescriptiveItems from "../components/DescriptiveItems";
import Heading from "../components/Heading";

type CommunityItems = {
    name: string,
    src: string,
    heading: string,
    paragraph: string
}

export default function Community() {
    const heading: string = "Manage your Entire Community in a Single System";
    const paragraph: string = "For who Nextcent is suitable for?";

    const communityData: CommunityItems[] = [
        {name: "users-icon", src: "/svg/users-icon.svg", heading: "Membership Organisations", paragraph: "Our membership management software provides full automation of membership renewals and payments"},
        {name: "building-icon", src: "/svg/building-icon.svg", heading: "National Associations", paragraph: "Our membership management software provides full automation of membership renewals and payments"},
        {name: "group-icon", src: "/svg/hands-icon.svg", heading: "Clubs and Groups", paragraph: "Our membership management software provides full automation of membership renewals and payments"}
    ]
    return (
        <section className="w-full py-10">
            <div className="w-[80%] flex flex-col gap-8 mx-auto">
                <Heading heading={heading} paragraph={paragraph} />
                <DescriptiveItems items={communityData} width={70} height={50}/>
            </div>
        </section>
    );
}