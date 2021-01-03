const  Discord  =  require ( 'discord.js' )
const  bot  =  nouveau  Discord . Client ( )

// bot.on () permet de récupérer un événement.
// L'événement "ready" réagis quand le bot est prêt.
// L'événement "message" permet de récupérer un message qui a été envoyé.


bot . on ( 'prêt' ,  ( )  =>  {
    console . log ( 'Connecté!' )  // La console dira "Connecté" comme vous l'avez vu!
} )

bot . on ( 'message' ,  message  => {  // Réagis quand un message est envoyé
if ( message . content . startsWith ( '! ping' ) ) {  // Si le début de votre message commence par! ping
    message . canal . send ( 'pong!' )  // Le bot répondra pong!
} ;

} )
bot . login (process.env.BOT_TOKEN)
