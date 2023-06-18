import "./topbar.css" ;
import {Person,Chat , Notifications, Search} from "@material-ui/icons"
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">LamaSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input className="searchInput" 
          placeholder="search for friend ,post,video">
          </input>
        </div>
      </div>
      <div className="topbarRight">
        <span className="topbarLink">HomePage</span>
        <span className="topbarLink">TimeLine</span>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <Person />
            <span className="topbarIconbadge">1</span>
          </div>
          <div className="topbarIconItems">
            <Chat />
            <span className="topbarIconbadge">1</span>
          </div>
          <div className="topbarIconItems">
            <Notifications />
            <span className="topbarIconbadge">1</span>
          </div>
          <img src="/assets/Elon_Musk_Royal_Society_(crop2).jpg" alt="" className="topbarImg" />
        </div>
      </div>
  
    </div>
  )
}
