import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const formatUserName = (userName) => `@${userName}`

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Dúran',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: false
    }, 
    {
        userName: 'PacoHDezs',
        name: 'Paco Espadas',
        isFollowing: true
    }, 
    {
        userName: 'Manu16',
        name: 'Manuel Muñoz',
        isFollowing: false
    },
]

export function App() {
    return (
    <section className='App'>
        {
            users.map(user => {
                const {userName, name, isFollowing} = user

                return (
                    <TwitterFollowCard 
                        key={userName}
                        formatUserName = {formatUserName} 
                        username = {userName}
                        initialIsFollowing = {isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })
        }
    </section>
 )   
}