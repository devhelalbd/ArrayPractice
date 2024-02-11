const dev = [

    {
        Name: 'Helal Uddin',
        Fathers_Name: 'Mohsin Ali',
        SSC: 2018,
        Diploma: 2023,
        SSC_Point: 4.75,
        Diploma_Reslut: 3.77,
        Skill: "Web Developer",
        Hobby: ['Travel', 'Coding', 'Reading'],
        Home_Dristict: 'Thakurgoan',
        Division: 'Rangpur',
        IsMarried: false,
        Foods: ['Kacchi', 'Khichuri', 'Biriyani', 'Morog Polao'],
    },
    {
        Name: 'Habib Hossen',
        Fathers_Name: 'Motin Ali',
        SSC: 2010,
        Diploma: 2025,
        SSC_Point: 4.95,
        Diploma_Reslut: 3.07,
        Skill: "Web Developer",
        Hobby: ['Travel', 'Coding', 'Reading'],
        Home_Dristict: 'Dhaka',
        Division: 'Dhaka',
        IsMarried: true,
        Foods: ['Kacchi', 'Khichuri', 'Biriyani', 'Morog Polao'],
    },
    {
        Name: 'Johir Mia',
        Fathers_Name: 'Romjan Ali',
        SSC: 2018,
        Diploma: 2023,
        SSC_Point: 4.55,
        Diploma_Reslut: 3.57,
        Skill: "Student",
        Hobby: ['Travel', 'Coding', 'Reading'],
        Home_Dristict: 'Dinajpur',
        Division: 'Rangpur',
        IsMarried: false,
        Foods: ['Kacchi', 'Khichuri', 'Biriyani', 'Morog Polao'],
    },
    {
        Name: 'Khairul',
        Fathers_Name: 'Abul Kasem Ali',
        SSC: 2015,
        Diploma: 2018,
        SSC_Point: 4.75,
        Diploma_Reslut: 3.77,
        Skill: "Teacher",
        Hobby: ['Travel', 'Coding', 'Reading'],
        Home_Dristict: 'Rangpur',
        Division: 'Rangpur',
        IsMarried: false,
        Foods: ['Kacchi', 'Khichuri', 'Biriyani', 'Morog Polao'],
    },
    {
        Name: 'Limon Mia',
        Fathers_Name: 'Joynal Mia',
        SSC: 2014,
        Diploma: 2018,
        SSC_Point: 4.76,
        Diploma_Reslut: 3.70,
        Skill: "Graphic Designer",
        Hobby: ['Travel', 'Coding', 'Reading'],
        Home_Dristict: 'Dhaka',
        Division: 'Dhaka',
        IsMarried: true,
        Foods: ['Kacchi', 'Khichuri', 'Biriyani', 'Morog Polao'],
    }
]

dev.map((item, index) =>{
    setTimeout(() =>{
        console.log(`
        Name: ${item.Foods[1]}
        `);
    },1000 * index)
})