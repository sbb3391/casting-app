const state = {
    user: {},
    userApplications: [],
    application: {
        description: 'looking for mountain bikers for a beautiful shoot in Colorado',
        userData: {
            height: "6'2",
            weight: "230lb",
            topSize: 'xl',
            waistSize: 36
        },
        applicationQuestions: [
            {
                id: 'xxx',
                applicationId: 'xxx',
                questionId: 'xxx',
                question: 'Are you comfortable working at high altitude?',
                answer: true
            }
        ],
        role: {
            applicationRoleQuestions: [
                {
                    id: 'xxx',
                    roleId: 'xxx',
                    questionId: 'xxx',
                    question: 'How many years of mountain biking experience do you have?',
                    answer: 10
                }
            ],
            roleName: 'Mountain Biker',
            roleGender: 'male'
        },
    },
    castings: [],
    newApplication: {}

}