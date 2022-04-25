import NorthFace from '../../assets/north_face.jpeg'
import Columbia from '../../assets/columbia.png'
import Merrel from '../../assets/merrel.jpeg'
import Russel from '../../assets/russel.png'
import UnderArmour from '../../assets/under_armour.png'

const descriptionIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tellus sapien, vehicula ut rhoncus id, scelerisque et dui. Fusce luctus lacinia justo, nec posuere lectus facilisis vitae. Morbi pellentesque malesuada nunc, eu imperdiet est porta eu. Proin a luctus mauris. Sed vitae est tristique, dignissim eros eu, mollis turpis. Donec at nisl semper, feugiat est ac, dictum turpis. Integer dui magna, ornare non elementum vitae, consectetur a ipsum. Integer non velit orci. Suspendisse potenti.'


export const CASTINGS_DATA = [
    {
        id: 1,
        company: 'Columbia',
        castingRoles: [
            {
                id: 1,
                castingId: 1,
                roleId: 'xxx',
                roleName: 'mountain biking',
                roleImageUrl: 'MountainBike',
                roleGender: 'female',
                castingRoleQuestions: [
                    {
                        id: 1,
                        text: 'How many years have you been involved in this activity?',
                        responseType: 'number'
                    },
                    {
                        id: 2,
                        text: 'Describe why you are passionate about this activity?',
                        responseType: 'textArea'
                    },
                    {
                        id: 3,
                        text: 'Describe your previous experience.',
                        responseType: 'textArea'
                    },
                    {
                        id: 4,
                        text: 'Describe any serious injuries while participating this activity.',
                        responseType: 'textArea'
                    },
                    {
                        id: 5,
                        text: 'Are you currently under contract with any professional organizations related to this activity?',
                        responseType: 'bool'
                    },
                ]
            },
            {
                id: 2,
                castingId: 1,
                roleId: 'xxx',
                roleName: 'mountain biker',
                roleImageUrl: 'MountainBike',
                roleGender: 'male',
            },
            {
                id: 3,
                castingId: 1,
                roleId: 'xxx',
                roleName: 'water skier',
                roleImageUrl: 'WaterSkier',
                roleGender: 'male',
            },
            {
                id: 4,
                castingId: 1,
                roleId: 'xxx',
                roleName: 'water skier',
                roleImageUrl: 'WaterSkier',
                roleGender: 'female',
            }
        ],
        castingDescription: descriptionIpsum,
        castingImageUrl: Columbia,
        castingQuestions: [
            {
                id: 1,
                text: 'Are you available to travel internationally?',
                responseType: 'bool'
            },
            {
                id: 2,
                text: 'Do you have any felonies on your record?',
                responseType: 'bool'
            },
            {
                id: 3,
                text: 'Describe your love for the outdoors?',
                responseType: 'textArea'
            }
        ]

    },
    {
        id: 2,
        company: 'North Face',
        castingRoles: [
            {
                id: 5,
                castingId: 2,
                roleId: 'xxx',
                roleName: 'rock climber',
                roleImageUrl: 'Climbing',
                roleGender: 'female',
            },
            {
                id: 6,
                castingId: 2,
                roleId: 'xxx',
                roleName: 'runner',
                roleImageUrl: 'Runner',
                roleGender: 'male',
            }
        ],
        castingDescription: descriptionIpsum,
        castingImageUrl: NorthFace,

    },
    {
        id: 3,
        company: 'Under Armour',
        castingRoles: [
            {
                id: 7,
                castingId: 3,
                roleId: 'xxx',
                roleName: 'football player',
                roleImageUrl: 'Football',
                roleGender: 'male',
            },
            {
                id: 8,
                castingId: 3,
                roleId: 'xxx',
                roleName: 'weight lifter',
                roleImageUrl: 'Barbell',
                roleGender: 'male',
            }
        ],
        castingDescription: descriptionIpsum,
        castingImageUrl: UnderArmour,

    },
    {
        id: 4,
        company: 'Nike',
        castingRoles: [
            {
                id: 9,
                castingId: 4,
                roleId: 'xxx',
                roleName: 'cyclist',
                roleImageUrl: 'Cycling',
                roleGender: 'female',
            }
        ],
        castingDescription: descriptionIpsum,
        castingImageUrl: UnderArmour,

    },
    {
        id: 5,
        company: 'Merrel',
        castingRoles: [
            {
                id: 10,
                castingId: 5,
                roleId: 'xxx',
                roleName: 'shoe model',
                roleImageUrl: 'ShoeModel',
                roleGender: 'female',
            },
            {
                id: 11,
                castingId: 5,
                roleId: 'xxx',
                roleName: 'mountain biker',
                roleImageUrl: 'MountainBike',
                roleGender: 'male',
            }
        ],
        castingDescription: descriptionIpsum,
        castingImageUrl: Merrel,
    },
    {
        id: 6,
        company: 'Russel',
        castingRoles: [
            {
                id: 12,
                castingId: 6,
                roleId: 'xxx',
                roleName: 'crossfit athlete',
                roleImageUrl: 'Crossfit',
                roleGender: 'female',
            },
            {
                id: 13,
                castingId: 6,
                roleId: 'xxx',
                roleName: 'crossfit athlete',
                roleImageUrl: 'Crossfit',
                roleGender: 'male',
            }
        ],
        castingDescription: descriptionIpsum,
        castingImageUrl: Russel,
    }
]