import { useState } from 'react';
import type { Resource } from '../types/resource';
import SearchForm from '../components/SearchForm';
import ResourceList from '../components/ResourceList';

const App = () => {
    const [resources, setResources] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">

            {/* Navbar */}
            <nav className="bg-gray-900 text-white px-6 py-4">
                <h1 className="text-lg font-semibold tracking-wide">STEM Resource Finder</h1>
            </nav>

            <div className="flex flex-1">

                {/* Left Sidebar */}
                <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col gap-6 min-h-screen text-center">
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">Resource Filter</h2>
                        <p className="text-sm text-gray-400 mt-1">Find your next STEM resource</p>
                    </div>

                    <SearchForm
                        onResults={setResources}
                        onLoading={setLoading}
                        onError={setError}
                    />

                    {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}
                    {loading && (
                        <p className="text-blue-400 text-sm animate-pulse">Fetching resources...</p>
                    )}
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8">
                    {resources.length === 0 && !loading ? (
                        <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                            <div className="bg-blue-50 p-6 rounded-2xl">
                                <span className="text-5xl">🔬</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-700">Ready to discover?</h2>
                            <p className="text-gray-400 max-w-sm">
                                Search for a topic to get started. Resources are sourced via AI across videos, courses, papers and more.
                            </p>
                        </div>
                    ) : (
                        <ResourceList resources={resources} />
                    )}
                </main>

            </div>
        </div>
    );
};

export default App;