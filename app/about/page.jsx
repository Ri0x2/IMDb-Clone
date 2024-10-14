import React from 'react'

export default function About() {
  return (
    <div className='max-w-6xl mx-auto p-3 space-y-7'>
        <h1 className='text-2xl font-bold text-amber-500'>About IMDb</h1>
        <p>IMDb (Internet Movie Database) is a comprehensive online database of informat
            ion related to films, television programs, and celebrities. Here’s a summary of key p
            oints from the search results:
        </p>
        <div className='ml-6 space-y-6'>
         <ul className='list-disc lis'>
            <li className='lis'>
                <span className='font-bold'>History</span>: IMDb originated in 1990 with a Usenet posting by Col Needham, an English film fan and computer programmer, about actresses with beautiful eyes.
            </li>
            <li className='lis'> 
                <span className='font-bold'>Content</span>: The database contains over 10.1 million
                 titles (including TV episodes), 11.5 million person records
                 , and 83 million registered users. Title and talent pages are acc
                 essible to all users, but only registered and logged-in users can s
                 ubmit new material and suggest edits to existing entries.
            </li>
            <li className='lis'>
            <span className='font-bold'>User Profiles</span>: Registered users can create profiles, showcasing
             their registration date, personal ratings of titles, and optional
             badges indicating their contributions (e.g., photos, trivia, biographies).
            </li>
            <li className='lis'>
            <span className='font-bold'>IMDbPro</span>: A premium subscription service for industry personnel, allowing them to upload headshots, photos, and résumés, as well as access additional features and privileges.
            </li>
        </ul>
        </div>
        <p></p>
    </div>
  )
}
