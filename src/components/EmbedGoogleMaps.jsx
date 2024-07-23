const EmbedGoogleMaps = () => 
{
    return (
        <div id="embed-google-maps" className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-48 border-t border-white/10 text-center align-middle flex justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.21685221996!2d-118.2941414242961!3d33.75506177327037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd37a02e7cd483%3A0x4e619386d1ea3ab6!2sAuto%20Film%20Experts!5e0!3m2!1sen!2sus!4v1721762949493!5m2!1sen!2sus" width="600" height="450" style={{"border" : "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default EmbedGoogleMaps;