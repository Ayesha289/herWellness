const Features = () => {
    return (
        <section className="bg-[#e1fffb] h-screen flex flex-col items-center justify-center px-8 text-center animate-fade-in">
            <h2 className="font-dancingScript text-highlight text-6xl mb-8">App Features</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 animate-slide-in-left">
                    <h3 className="font-sourGummy text-3xl text-highlight mb-4">AI-Driven Health Reports</h3>
                    <p className="font-sourGummy text-secondary text-lg">
                        Get personalized health reports based on your questionnaire responses. Our AI generates insights tailored to your specific health profile, helping you make informed decisions about your well-being.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 animate-slide-in-left animate-delay-100">
                    <h3 className="font-sourGummy text-3xl text-highlight mb-4">Personalized Health Tips</h3>
                    <p className="font-sourGummy text-secondary text-lg">
                        Receive customized suggestions and tips to help improve your health. From lifestyle changes to fitness goals, we help you achieve a healthier and more balanced life.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 animate-slide-in-left animate-delay-200">
                    <h3 className="font-sourGummy text-3xl text-highlight mb-4">Secure Data Storage</h3>
                    <p className="font-sourGummy text-secondary text-lg">
                        Your data is stored securely, with encryption and protection at every step. You can trust us with your personal information, knowing it’s safe and private.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;