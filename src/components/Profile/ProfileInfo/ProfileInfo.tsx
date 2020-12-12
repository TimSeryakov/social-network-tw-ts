import React from 'react'
import {Preloader} from "../../common/Preloader"
import {UserProfileDataType} from "../../../redux/profile-reducer"
import noPhotoImage from '../../../assets/img/nyancat.png'
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoPropsType = {
  profileData: UserProfileDataType
  updateUserStatus: (userProfileStatus: string) => void
  userStatus: string
  isProfileDataFetching: boolean
}

export function ProfileInfo(props: ProfileInfoPropsType) {

  if (!props.profileData || props.isProfileDataFetching) {
    return <section className="h-64"><Preloader message="Loading profile data..."/></section>
  }

  return (
    <section className="pt-4 pb-10 px-4 flex flex-col sm:flex-row">

              <div className="p-3 sm:flex-shrink-0">
                <img
                    className="w-32 h-32 bg-theme-bg-secondary rounded-full border border-theme-border mx-auto"
                    src={noPhotoImage}
                    alt="avatar"
                />
              </div>

              <div className="px-4 text-white">
                <div className="">
                  <h3 className="text-3xl">{props.profileData.fullName}</h3>

                  <ProfileStatus userStatus={props.userStatus}
                                 updateUserStatus={props.updateUserStatus}
                  />

                  <p className="text-theme-text">{props.profileData.lookingForAJobDescription}</p>
                </div>
                {props.profileData.aboutMe &&
                <div className="mt-8">
                  <h4 className="pb-2">About</h4>
                  <p className="text-theme-text">{props.profileData.aboutMe}</p>
                </div>
                }
                <div className="mt-8">
                  <h4 className="pb-2">Contacts</h4>
                  <p className="text-theme-text">
                    {/*<span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">{props.profileData.contacts.facebook}</span>*/}
                    {/*<span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">{props.profileData.contacts.github}</span>*/}
                    {/*<span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">{props.profileData.contacts.instagram}</span>*/}
                    {/*<span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">{props.profileData.contacts.mainLink}</span>*/}
                    {/*<span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">{props.profileData.contacts.twitter}</span>*/}
                    {/*<span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">{props.profileData.contacts.vk}</span>*/}
                    {/*<span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">{props.profileData.contacts.website}</span>*/}
                    {/*<span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">{props.profileData.contacts.youtube}</span>*/}
                    <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#Interstellar</span>
                    <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#UK Music</span>
                    <span
                        className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#Liquid Drum'n'Bass</span>
                    <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#Drumfunk</span>
                    <span
                        className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#Old School Hip-Hop</span>
                    <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#ReactJS</span>
                    <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#Adobe XD</span>
                    <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#NextJS</span>
                    <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#Gatsby</span>
                    <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#VueJS</span>
                    <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#NuxtJS</span>
                    <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#Gridsome</span>
                    <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#GraphQL</span>
                    <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#TypeScript</span>
                    <span className="bg-theme-bg-third inline-block py-1 px-3 mr-2 my-1 rounded-md">#JetBrains</span>
                  </p>
                </div>
              </div>
            </section>
  )
}