import './testimonials.css';


function Testimonials(clients){

    let client = clients.clients;

    return (
        <div>


            <div className="testimonial_box">


                <div className="client_comment">
                    {client.comment}
                </div>

                <div className="client"> 
                   <div className="client_photo">
                        <img 
                            src={client.image}
                        />
                    </div>
                   <div className="client_name">{client.name}</div>
                   <div className="client_company">{client.company}</div>
                </div>
            </div>

        </div>
    );
}

export default Testimonials