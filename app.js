const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const musicians = [{ first: 'Clark', last: 'Terry', nickName: 'Clark', axe: 'trumpet', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'Marion', last: 'Childers', nickName: 'Buddy', axe: 'trumpet', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'John', last: 'Gillespie', nickName: 'Dizzy', axe: 'trumpet', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'Carl', last: 'Severinson', nickName: 'Doc', axe: 'trumpet', style: 'swing', format: 'big band', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'Conte', last: 'Candoli', nickName: 'Conte', axe: 'trumpet', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'Peter', last: 'Candoli', nickName: 'Pete', axe: 'trumpet', style: 'swing', format: 'big band', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'Alan', last: 'Rubin', nickName: 'Mr Fabulous', axe: 'trumpet', style: 'swing', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'William', last: 'Adderley', nickName: 'Cannon Ball', axe: 'alto', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'Benjamin', last: 'Goldson', nickName: 'Benny', axe: 'alto', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'John', last: 'Coletrane', nickName: 'Trane', axe: 'tenor', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'Walter', last: 'Rollins', nickName: 'Sonny', axe: 'tenor', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'Gerry', last: 'Mulligan', nickName: 'Gerry', axe: 'bari', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'Locksley', last: 'Hampton', nickName: 'Slide', axe: 'bone', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'Kai', last: 'Winding', nickName: 'Kai', axe: 'bone', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'William', last: 'Basie', nickName: 'Count', axe: 'piano', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'Paul', last: 'Chambers', nickName: 'Mr. PC', axe: 'bass', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'Joseph', last: 'Jones', nickName: 'Philly Joe', axe: 'drummer', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'Jean', last: 'Reinhardt', nickName: 'Django', axe: 'guitar', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'Billie', last: 'Holiday', nickName: 'Lady Day', axe: 'vocalist', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' },
{ first: 'Cabell', last: 'Calloway', nickName: 'Cab', axe: 'vocalist', style: 'bebop', format: 'combo', dob: '12/14/1920', dod: '02/21/2015' }]

app.get('/musicians', cors(), (req, res) => res.send(musicians));

app.get('/musicians/:nickName', cors(), (req, res) => {
    const musician = musicians.find(player => player.nickName === req.params.nickName);
    if (musician) {
        res.send(musician);
    } else {
        res.send('could not find!');
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

