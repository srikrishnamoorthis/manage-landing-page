import Header from './header';
import Introduction from './introduction';
import Testimonials from './testimonials';
import CallToAction from './callToAction';
import Footer from './footer';

function App() {
    return (
        <div className="font-be-vietnam lg:max-w-[1024px] bg-light-gray mx-auto">
            <Header />
            <main>
                <Introduction />
                <Testimonials />
                <CallToAction />
                <Footer />
            </main>
        </div>
    );
}

export default App;
