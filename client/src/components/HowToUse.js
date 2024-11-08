const HowToUse = () => {
    return (
        <section className="bg-white h-screen flex flex-col items-center justify-center px-8 text-center animate-fade-in">
            <h2 className="font-dancingScript text-highlight text-6xl mb-4">How to Use HerWellness</h2>
            <ol className="font-sourGummy text-secondary text-2xl max-w-3xl mx-auto list-decimal space-y-4 pl-6 text-left">
                <li>Create an account and securely log in to your profile.</li>
                <li>Complete the health questionnaire to provide insights into your well-being.</li>
                <li>Our AI will analyze your responses and generate a personalized health report.</li>
                <li>Receive tailored health tips and suggestions on how to improve your lifestyle.</li>
                <li>Track your progress and continue your health journey with confidence.</li>
            </ol>
        </section>
    );
};

export default HowToUse;
