import Section from "../components/Section";

export default function PixelGrade() {
    const imgName: string = "convo-icon";
    const imgSrc: string = "/svg/understanding-icon.svg";
    const heading: string = "The unseen of spending three years at Pixelgrade";
    const paragraph: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.";
    const buttonText: string = "Learn More";
    const imgWidth: number = 1500;
    const imgHeight: number = 500;
    return (
        <section className="w-full py-12">
            <div className="w-[80%] flex gap-10 mx-auto items-center justify-between">
                <Section name={imgName} src={imgSrc} width={imgWidth} height={imgHeight} heading={heading} paragraph={paragraph} buttonText={buttonText}/>
            </div>
        </section>
    );
}