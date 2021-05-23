import React, { useState } from "react";
import { connect } from "react-redux";



const ShowModal = (props) => {
  // console.log(props.addPost);
   const [post, setPost] = useState({name:'swapno',text:''})
const handleModalBlur = (event) =>{
  
    let tepPost = {...post}
    tepPost[event.target.name] = event.target.value 
    setPost(tepPost)
}

const handelModalSubmit = () =>{
  props.addPost(post.name,post.text)
    // console.log(post);
}
  return (
    <div>
      <div className="MainDiv">
        <div class="jumbotron text-center bg-sky">
          {/* <h3>Reactjs</h3> */}
        </div>

        <div className="container">
          <div class="modal" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Modal Heading</h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div class="modal-body">
                    <h3>Write your post hear</h3>
                    <input onBlur={handleModalBlur} name='text' type="text" />
                </div>
                <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  onClick={handelModalSubmit}
                  >
                  Submit
                  </button>
             
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowModal;
