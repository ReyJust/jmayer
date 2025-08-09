import Silk from "./visuals/Silk";

const CTA: React.FC = () => {
  return (
    <div className="py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 h-[50vh]">
          <Silk
            speed={8}
            scale={1.2}
            color="#1e2939"
            noiseIntensity={1.5}
            rotation={0}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h4 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
              Let's Collaborate
            </h4>

            <p className="text-white text-sm sm:text-md leading-relaxed p-4 max-w-2xl">
              Whether you're looking to hire, collaborate on a project, or just
              want to connect, I'd love to hear from you.
              <br /> Feel free to reach out through any of the channels above!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
