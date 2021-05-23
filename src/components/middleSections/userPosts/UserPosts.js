import React from 'react';
import { connect } from 'react-redux';
import userImg from '../../../images/userImg.jpg'
export const posts = [
    {name:'simanto',userImg:userImg,postImg:"",postText:'this is good',comments:[{name:"",userImg:"",text:""}]},
    {name:'rana',userImg:userImg,postImg:"",postText:'this is good',comments:[{name:"",userImg:"",text:""}]},
    {name:'shipon',userImg:userImg,postImg:"",postText:'this is good',comments:[{name:"",userImg:"",text:""}]},
    {name:'digonto',userImg:userImg,postImg:"",postText:'this is good',comments:[{name:"",userImg:"",text:""}]},
    {name:'romeo',userImg:userImg,postImg:"",postText:'this is good',comments:[{name:"",userImg:"",text:""}]}
];
const mapStateToProps = (state) => {
    return {
        rePosts: state.loggedInUser
    }
}
const UserPosts = (props) => {
 console.log(props);
    return (
        <div>
            
        </div>
    );
};

export default connect(mapStateToProps) (UserPosts);