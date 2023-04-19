import React, { useState } from 'react';
import { ScatterPlot } from '@nivo/scatterplot';

// Liste von Blogs
const languages = ['Blog nature', 'Blog vulcano', 'Blog camping', 'Blog sea', 'Blog working', 'Blog swimming'];

//professional = 1.5
//advanced 0.5
//beginner -0.5
//unknown -1.5

// Bewertungen für User 1
const user1Ratings = {
    //user 1 is blue
    'Blog nature': 0.5,
    'Blog vulcano': 0.5,
    'Blog camping': 1.5,
    'Blog sea': -1.5,
    'Blog working': -1.5,
    'Blog swimming': -1.5,
};

// Bewertungen für User 2
const user2Ratings = {
    //user 2 is orange
    'Blog nature': 1,
    'Blog vulcano': -1.5,
    'Blog camping': 0.5,
    'Blog sea': 0.5,
    'Blog working': -1.5,
    'Blog swimming': 1.5,
};

const user3Ratings = {
    //user 3 is green
    'Blog nature': 1.5,
    'Blog vulcano': -1.5,
    'Blog camping': 1.0,
    'Blog sea': 1.5,
    'Blog working': 0.5,
    'Blog swimming': 1.5,
};

const user4Ratings = {
    //user 4 is black
    'Blog nature': 1.5,
    'Blog vulcano': 0,
    'Blog camping': 0,
    'Blog sea': 1.5,
    'Blog working': 0.5,
    'Blog swimming': 1.5,
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

    const handleNodeHover = (node) => {
        setHoveredNode(node);
    };

    const handleNodeLeave = () => {
        setHoveredNode(null);
    };

    const renderTooltip = ({ node }) => {
        return (
            <div
                style={{
                    background: '#fff',
                    padding: '9px 12px',
                    border: '1px solid #ccc',
                    color: node.color,
                }}
            >
                <div>
                    <strong>
                        {node.data.username}: {node.data.language}
                    </strong>
                </div>
                <div>Bewertung: {node.data.y}</div>
            </div>
        );
    };

    const renderLegend = () => {
        const legendItems = [
            { label: 'User 1', color: '#6495ED' },
            { label: 'User 2', color: '#FFA07A' },
            { label: 'User 3', color: '#00FF00' },
            { label: 'User 4', color: '#000000' },
        ];

        return (
            <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px' }}>
                {legendItems.map((item) => (
                    <div className="legend-item" key={item.label}>
                        <span className="legend-circle" style={{ backgroundColor: item.color }}></span>
                        <div className={`legend-${item.label.toLowerCase().replace(' ', '')}`}>{item.label}</div>
                    </div>
                ))}
            </div>
        );
    };

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
                onMouseEnter={handleNodeHover}
                onMouseMove={handleNodeHover}
                onMouseLeave={handleNodeLeave}
                tooltip={renderTooltip}
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
                ></div>
            )}

            {renderLegend()}
        </div>
    );
};

export default MyScatterplot;




