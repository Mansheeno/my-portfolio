import mypic from './mypic.jpg';

const Greeting = () => {
  return (
    <div className="max-w-sm mx-auto p-6 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl">
      <div className="relative w-20 h-20 mx-auto mb-4">
        <img
          src={mypic}
          alt="Manshak Daniel Simon"
          className="w-full h-full rounded-full object-cover border-4 border-white shadow-md transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-1">Manshak Daniel Simon</h2>
      <p>
        <span className="font-medium text-gray-700">Occupation:</span>{' '}
        <span className="text-blue-600">
            Front-End Developer
        </span>
      </p>

      <div className="space-y-2 text-sm">
        <p>
          <span className="font-medium text-gray-700">📧 Email:</span>{' '}
          <a href="mailto:djmansheeno@gmail.com">
            <span className="text-blue-600 hover:underline">djmansheeno@gmail.com</span>
          </a>
        </p>
        <p>
          <span className="font-medium text-gray-700">🐦 Twitter:</span>{' '}
          <a
            href="https://x.com/djmansheeno"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @djmansheeno
          </a>
        </p>
        <p>
          <span className="font-medium text-gray-700">💻 GitHub:</span>{' '}
          <a
            href="https://github.com/mansheeno"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Mansheeno
          </a>
        </p>
      </div>
    </div>
  );
};

export default Greeting;