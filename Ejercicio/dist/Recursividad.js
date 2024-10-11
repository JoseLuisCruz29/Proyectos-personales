"use strict";
function listContents(Items, indent = '') {
    console.log(indent + Items.name);
    if (Items.type === 'directory') {
        for (const item of Items.contents) {
            listContents(item, indent + '  ');
        }
    }
}
function sizeToBytes(size) {
    const parts = size.match(/(\d+[.,])(\D+)/i);
    if (parts) {
        const coefficient = parseInt(parts[1]);
        const unit = parts[2];
        if (unit.indexOf("K") >= 0) {
            return Math.floor(coefficient * 1000);
        }
        if (unit.indexOf("M") >= 0) {
            return Math.floor(coefficient * 1000000);
        }
        if (unit.indexOf("G") >= 0) {
            return Math.floor(coefficient * 1000000000);
        }
        if (unit.indexOf("T") >= 0) {
            return Math.floor(coefficient * 1000000000000);
        }
    }
    console.log(parts);
    return 0;
}
const sampleTree = {
    name: 'MyDocuments',
    type: 'directory',
    contents: [
        {
            name: 'Photos',
            type: 'directory',
            contents: [
                {
                    name: 'Vacation2022',
                    type: 'directory',
                    contents: [
                        { name: 'beach.jpg', type: 'file', size: '5MB' },
                        { name: 'mountains.jpg', type: 'file', size: '6MB' },
                        { name: 'campfire.png', type: 'file', size: '4MB' },
                        { name: 'group_photo.jpeg', type: 'file', size: '10MB' }
                    ]
                },
                {
                    name: 'BirthdayParty',
                    type: 'directory',
                    contents: [
                        { name: 'cake.jpg', type: 'file', size: '3MB' },
                        { name: 'decorations.png', type: 'file', size: '2.5MB' },
                        { name: 'family_photo.jpg', type: 'file', size: '8MB' }
                    ]
                },
                { name: 'profile_pic.png', type: 'file', size: '1MB' },
                { name: 'cat.jpeg', type: 'file', size: '4MB' }
            ]
        },
        {
            name: 'Projects',
            type: 'directory',
            contents: [
                {
                    name: 'WebsiteRedesign',
                    type: 'directory',
                    contents: [
                        { name: 'index.html', type: 'file', size: '50KB' },
                        { name: 'styles.css', type: 'file', size: '20KB' },
                        { name: 'script.js', type: 'file', size: '15KB' }
                    ]
                },
                {
                    name: 'CalculatorApp',
                    type: 'directory',
                    contents: [
                        { name: 'main.ts', type: 'file', size: '10KB' },
                        { name: 'math_utils.ts', type: 'file', size: '12KB' },
                        { name: 'README.md', type: 'file', size: '5KB' }
                    ]
                }
            ]
        },
        {
            name: 'Music',
            type: 'directory',
            contents: [
                { name: 'favorite_song.mp3', type: 'file', size: '5MB' },
                { name: 'workout_playlist.m3u', type: 'file', size: '1KB' }
            ]
        },
        { name: 'Resume.docx', type: 'file', size: '100KB' },
        { name: 'ShoppingList.txt', type: 'file', size: '2KB' }
    ]
};
//listContents(sampleTree);
const numeros = [2, 15, 84, 32, 93, 4];
console.log(numeros.sort((a, b) => {
    return a - b;
}));
