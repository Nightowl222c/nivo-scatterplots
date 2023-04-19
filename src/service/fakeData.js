// Liste von Blogs

export const languages = ['Blog nature',
    'Blog vulcano',
    'Blog camping',
    'Blog sea',
    'Blog working',
    'Blog swimming'];

export function generateFakeUserData(username, ratings) {
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

export const data = [
    generateFakeUserData('User 1', user1Ratings),
    generateFakeUserData('User 2', user2Ratings),
    generateFakeUserData('User 3', user3Ratings),
    generateFakeUserData('User 4', user4Ratings),
];


