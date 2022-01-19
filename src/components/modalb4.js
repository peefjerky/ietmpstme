import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/modalb4.scss";

const Modal = () => {
  return (
    <div>
      <div className="modal fade" id="myModal1">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mx-auto">Hack n Code</h4>
              <button type="button" className="close" data-bs-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="row my-5">
                <div className="col-sm-12 col-md-6 col-lg-6 ">
                  <h1>What is Hack n Code?</h1>
                  <p>
                    Hack n Code is one of the two flagship events of IET MPSTME
                    on Campus. The hackathon spans over two days and is a total
                    of 16 hours long, during which participants code a solution
                    to a problem statement presented before them. The two-day
                    event is an enthralling experience where budding coders
                    learn how to get started with competitive programming and
                    experienced coders put their coding skills to test.
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 my-auto">
                  <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />
                </div>

                <div className="col-lg-12 col-sm-12 col-md-12 text-center my-5">
                  <h2>Insert another heading here</h2>
                  <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                    <li>List item 4</li>
                  </ul>
                </div>
              </div>
              <h1>Terms of use</h1>
              <h2>Boring first article</h2>
              <p>
                Sed posuere consectetur est at lobortis. Curabitur blandit
                tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut
                id elit. Donec id elit non mi porta gravida at eget metus.
                Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et.
              </p>
              <h2>Boring second article</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Cras mattis
                consectetur purus sit amet fermentum. Vestibulum id ligula porta
                felis euismod semper. Cras mattis consectetur purus sit amet
                fermentum. Nulla vitae elit libero, a pharetra augue.
              </p>
              <h2>Boring third article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>

              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <h2>Boring fourth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
              <h2>Boring fifth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                /* className="btn btn-success" */
                id="btn"
                data-bs-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="myModal2">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mx-auto">Modal Heading</h4>
              <button type="button" className="close" data-bs-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="row my-5">
                <div className="col-sm-12 col-md-6 col-lg-6 ">
                  <h1>What is Botson?</h1>
                  <p>
                    Our flagship event, BOTSON, is a 2-day workshop that trains
                    the participants in making a fully functional bot
                    themselves. The event helps enhance students' skills in
                    working with Arduino, Bluetooth sensors, AI, and even
                    electricals. Not only was this event conducted offline for
                    four consecutive years, but we also managed to pull it off
                    online last year, with a stellar participants list,
                    constituted of those stalwarts who didn't allow the pandemic
                    to dull their curiosity.
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 my-auto">
                  <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />
                </div>

                <div className="col-lg-12 col-sm-12 col-md-12 text-center my-5">
                  <h2>Insert another heading here</h2>
                  <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                    <li>List item 4</li>
                  </ul>
                </div>
              </div>
              <h1>Terms of use</h1>
              <h2>Boring first article</h2>
              <p>
                BOTSON is one of the best events to learn to make bots from
                scratch. From learning about various parts to fully construct
                it. With over 100 participants this 2-day event is full of
                discussions. The participants are taught the basics of arduino
                and how its used.
              </p>
              <h2>Boring second article</h2>
              <p>
                This event is not only about robotics, but also about
                programming and coding. Participants also write certain codes
                and programs for the proper functioning of the bot. The final
                result? A fully functional bot which they can command using
                their mobile phones.
              </p>
              <h2>Boring third article</h2>
              <p>
                The event allows the participant to learn things about diverse
                domains. They get an opportunity to experiment and gain
                experience in bot making. Certificates are provided to the
                participants.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>

              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <h2>Boring fourth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
              <h2>Boring fifth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                /* className="btn btn-success" */
                id="btn"
                data-bs-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="myModal3">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mx-auto">Modal Heading</h4>
              <button type="button" className="close" data-bs-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="row my-5">
                <div className="col-sm-12 col-md-6 col-lg-6 ">
                  <h1>What is IET Talks?</h1>
                  <p>
                    IETalks, an initiative of IET MPSTME, was created to give
                    young students an idea of what is expected of them in the
                    real world. A highly trained professional speaks elaborately
                    and takes up questions the students might have regarding the
                    working of the enormous industrial world and its nuances.
                    Especially in these ever-changing landscapes of engineering
                    and technology, IETalks aims to provide a platform for
                    students and professionals to connect and create an
                    environment of exposure and learning.
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 my-auto">
                  <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />
                </div>

                <div className="col-lg-12 col-sm-12 col-md-12 text-center my-5">
                  <h2>Insert another heading here</h2>
                  <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                    <li>List item 4</li>
                  </ul>
                </div>
              </div>
              <h1>Terms of use</h1>
              <h2>Boring first article</h2>
              <p>
                Sed posuere consectetur est at lobortis. Curabitur blandit
                tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut
                id elit. Donec id elit non mi porta gravida at eget metus.
                Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et.
              </p>
              <h2>Boring second article</h2>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Cras mattis
                consectetur purus sit amet fermentum. Vestibulum id ligula porta
                felis euismod semper. Cras mattis consectetur purus sit amet
                fermentum. Nulla vitae elit libero, a pharetra augue.
              </p>
              <h2>Boring third article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>

              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <h2>Boring fourth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
              <h2>Boring fifth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                /* className="btn btn-success" */
                id="btn"
                data-bs-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="myModal4">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mx-auto">Modal Heading</h4>
              <button type="button" className="close" data-bs-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="row my-5">
                <div className="col-sm-12 col-md-6 col-lg-6 ">
                  <h1>Python Workshop</h1>
                  <p>
                    The Python workshop organised by IET MPSTME on Campus aims
                    to teach participants the fundamentals of Python, which is
                    currently one of the most popular programming languages in
                    the world. The workshop lasts over two days and is a great
                    learning experience as participants get practical knowledge
                    from an expert in the subject.
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 my-auto">
                  <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />
                </div>

                <div className="col-lg-12 col-sm-12 col-md-12 text-center my-5">
                  <h2>Insert another heading here</h2>
                  <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                    <li>List item 4</li>
                  </ul>
                </div>
              </div>
              <h1>Terms of use</h1>
              <h2>Boring first article</h2>
              <p>
                This workshop is a great opportunity for participants to learn
                about python right from the very basics. The participants are
                first taught the process of installation of python. Following
                the installation, a range of concepts is covered during the
                workshop. These include variables, data types- int, float, etc,
                conditional statements, loops and data structures such as lists,
                dictionaries and tuples.
              </p>
              <h2>Boring second article</h2>
              <p>
                In accordance with the popular saying, "Tell me and I forget,
                teach me and I remember, involve me and I learn," the Python
                workshop is a highly interactive session. Participants are
                encouraged to implement the concepts side by side with the
                instructor and all their doubts are expertly resolved.
              </p>
              <h2>Boring third article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Every year the Python workshop has been a great success. IET
                MPSTME on Campus has always received positive feedback from
                both- the participants and the instructors. In the short span of
                two days, the participants are exposed to the plethora of
                avenues they can explore by being handy in the Python
                programming language.
              </p>

              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <h2>Boring fourth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
              <h2>Boring fifth article</h2>
              <p>
                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac
                cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras mattis consectetur purus sit
                amet fermentum. Vestibulum id ligula porta felis euismod semper.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere consectetur est at lobortis. Donec id elit non mi porta
                gravida at eget metus. Curabitur blandit tempus porttitor. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                ullamcorper nulla non metus auctor fringilla. Vestibulum id
                ligula porta felis euismod semper.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                /* className="btn btn-success" */
                id="btn"
                data-bs-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
