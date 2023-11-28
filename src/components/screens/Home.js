import React from 'react';
import SectionTop from "../sections/SectionTop";
import SectionAboutUs from "../sections/SectionAboutUs";
import SectionOurProducts from "../sections/SectionOurProducts";
import SectionMeta from "../sections/SectionMeta";
import SectionWorks from "../sections/SectionWorks";
import SectionTestimonials from "../sections/SectionTestimonials";
import SectionLocation from "../sections/SectionLocation";
import SectionContact from "../sections/SectionContact";
import SectionBlog from "../sections/SectionBlog";
import Footer from "../sections/Footer";

const Home = () => {
    const sectionAboutUsRef = React.useRef(null);
    const sectionContactRef = React.useRef(null);

    return (
        <div className="Home">
            <main>
                <SectionTop
                    sectionAboutUsRef={sectionAboutUsRef}
                    sectionContactRef={sectionContactRef}
                />
                <SectionAboutUs sectionAboutUsRef={sectionAboutUsRef} />
                <SectionOurProducts />
                <SectionMeta />
                <SectionWorks />
                <SectionTestimonials />
                <SectionLocation />
                <SectionContact sectionContactRef={sectionContactRef} />
                <SectionBlog />
                <Footer
                    sectionAboutUsRef={sectionAboutUsRef}
                    sectionContactRef={sectionContactRef}
                />
            </main>
        </div>
    );
}

export default Home;