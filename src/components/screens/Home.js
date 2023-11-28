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
    return (

        <div className="Home">
            <main>
                <SectionTop />
                <SectionAboutUs />
                <SectionOurProducts />
                <SectionMeta />
                <SectionWorks />
                <SectionTestimonials />
                <SectionLocation />
                <SectionContact />
                <SectionBlog />
                <Footer />
            </main>
        </div>
    );
}

export default Home;