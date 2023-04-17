import React, { useState } from 'react';
import { ScatterPlot } from '@nivo/scatterplot';

// Liste der Programmiersprachen
const languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'PHP'];

//professional = 1.5
//advanced 0.5
//beginner -0.5
//unknown -1.5

// Bewertungen für User 1
const user1Ratings = {
    //user 1 is blue
    'JavaScript': 0.5,
    'PHP': 0.5,
    'Python': 1.5,
    'Java': -1.5,
    'C#': -1.5,
    'C++': -1.5,
};

// Bewertungen für User 2
const user2Ratings = {
    //user 2 is orange
    'JavaScript': 1,
    'PHP': -1.5,
    'Python': 0.5,
    'Java': 0.5,
    'C#': -1.5,
    'C++': 1.5,
};

const user3Ratings = {
    //user 3 is green
    'JavaScript': 1.5,
    'PHP': -1.5,
    'Python': 1.0,
    'Java': 1.5,
    'C#': 0.5,
    'C++': 1.5,
};

const user4Ratings = {
    //user 4 is black
    'JavaScript': 1.5,
    'PHP': 0,
    'Python': 0,
    'Java': 1.5,
    'C#': 0.5,
    'C++': 1.5,
};

// Funktion zum Erstellen der Daten für einen User
function generateFakeUserData(username, ratings) {
    return {
        id: username,
        data: languages.map((language) => ({
            x: language,
            y: ratings[language] || -1.5, // Falls keine Bewertung vorliegt, wird der "unknown level angenommen
            language,
            username,
        })),
    };
}

const data = [
    generateFakeUserData('User 1', user1Ratings),
    generateFakeUserData('User 2', user2Ratings),
    generateFakeUserData('User 3', user3Ratings),
    generateFakeUserData('User 4', user4Ratings),
];

const MyScatterplot = () => {
    const [hoveredNode, setHoveredNode] = useState(null);

    return (
        <div style={{ position: 'relative', backgroundColor: '#fff', padding: '20px' }}>
            <ScatterPlot
                data={data}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: -1.5, max: 1.5 }}
                margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
                axisBottom={{ tickSize: 0, tickPadding: 10, tickRotation: 0, legend: '', legendPosition: 'middle' }}
                axisLeft={{ tickSize: 0, tickPadding: 10, tickRotation: 0, legend: 'Bewertung', legendPosition: 'middle' }}
                width={600}
                height={400}
                colors={['#6495ED', '#FFA07A', '#00FF00', '#000000']}
                dotSize={10}
                dotBorderColor='#fff'
                animate={true}
                onMouseEnter={(node) => setHoveredNode(node)}
                onMouseMove={(node) => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
            />
            {hoveredNode && (
                <div
                    style={{
                        position: 'absolute',
                        top: hoveredNode.y + 10,
                        left: hoveredNode.x + 10,
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        padding: '5px',
                    }}
                >
                    <div>{hoveredNode.data.language}</div>
                    <div>{hoveredNode.data.username}</div>
                </div>
            )}
        </div>
    );
};

export default MyScatterplot;


