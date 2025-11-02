<script lang="ts">
  import { onMount } from 'svelte';
  import Page from './lib/Page.svelte';
  import {
    currentPage,
    getLineIndex,
    getPageIndex,
    next,
    previous,
    setLineIndex,
    setPageIndex,
    setPages,
  } from './lib/store.svelte';

  setPages([
    {
      lines: [{ t: 'On est sur le ferry de retour qui va de Turku à Stockholm.' }],
    },
    {
      lines: [
        {
          t: 'C’était le weekend, il y avait plus de monde qu’à l’aller, la piste de danse était presque pleine.',
        },
        {
          t: 'J’étais avec Franco et Jakob.',
        },
        {
          t: 'Guido s’était couché direct après l’embarquement.',
        },
      ],
    },
    {
      lines: [{ t: 'Moi je dansais,' }, { t: 'j’étais content.' }],
      style: 'bg-orange-600',
    },
    {
      lines: [
        { t: 'À l’aller j’avais dansé avec tout un groupe de Laponnes qui s’amusaient.' },
        {
          t: 'J’étais grosso modo le seul homme en état de danser.',
        },
        { t: 'Elles étaient trop contentes que je les invite chacune à leur tour.' },
      ],
    },
    {
      lines: [
        { t: 'Cette fois, j’étais un peu plus seul dans mon coin,' },
        { t: 'comme le reste des gens qui dansaient.' },
      ],
    },
    {
      lines: [{ t: 'Mes potes avaient continué sur les bières, mais moi j’avais arrêté.' }],
    },
    {
      lines: [
        {
          t: 'Je préférais',
        },
        {
          t: 'DANSER',
          style: 'font-[Caprasimo] custom-animate-dance text-pink-600',
          hold: 1000,
        },
      ],
    },
    {
      lines: [
        {
          t: 'Je suis revenu auprès de mes potes à un moment où j’avais un peu du mal sur les chansons finlandaises que je ne connaissais pas du tout mais que tous les autres connaissaient.',
        },
        { t: 'C’est toujours un peu moins drôle.' },
      ],
    },
    {
      lines: [{ t: 'Deux femmes parlaient avec eux au bord de la piste.' }, { t: 'C’était deux Finlandaises.' }],
    },
    {
      lines: [
        { t: 'Une était plus jeune, un peu m’as-tu-vue,' },
        { t: 'elle racontait pleins de trucs, un peu n’importe quoi sur des produits financiers, pas fascinant.' },
      ],
    },
    {
      lines: [{ t: 'Elle draguait Jakob.' }, { t: 'Tu m’étonnes, il est beau, et il a 24 ans.' }],
    },
    {
      lines: [{ t: 'L’autre était plutôt de mon âge,' }, { t: 'plus jeune quand même j’imagine.' }],
    },
    {
      lines: [
        { t: 'Elle était plus réservée que sa pote.' },
        { t: 'Par contre ça se voyait qu’elle avait envie de danser,' },
        { t: 'et moi j’aime bien danser avec les gens.' },
      ],
    },
    {
      lines: [{ t: 'Je la salue.' }],
    },
    {
      lines: [
        { t: 'Elle s’appelle', style: 'font-[Pacifico]' },
        { t: 'JASMIINA', style: 'text-6xl text-blue-600 font-[Caprasimo]' },
      ],
    },
    {
      lines: [
        { t: 'Elle est', style: 'font-[Pacifico]' },
        { t: 'BELLE', style: 'text-6xl text-blue-600 custom-animate-heartbeat font-[Caprasimo]', hold: 1000 },
      ],
    },
    {
      lines: [{ t: 'Elle souris.' }, { t: 'Je souris.' }, { t: 'Je danse.' }, { t: 'Elle danse.' }],
      style: 'bg-orange-600',
    },
    {
      lines: [
        { t: 'On se met un peu plus vers l’intérieur de la piste.' },
        { t: 'On danse tous les deux, face à face.' },
      ],
      style: 'bg-pink-600',
    },
    {
      lines: [
        { t: 'À un moment, je lui tend la main parce que la chanson se prête à un rock.' },
        {
          t: 'Elle ne danse pas très bien.',
        },
      ],
      style: 'bg-pink-600',
    },
    {
      lines: [
        {
          t: 'Mais ça se voit qu’elle est heureuse.',
          style: 'custom-animate-heartbeat',
        },
        {
          t: 'Et moi aussi je suis heureux.',
          style: 'custom-animate-heartbeat',
        },
      ],
      style: 'bg-pink-600',
    },
    {
      lines: [
        { t: 'On danse plusieurs morceaux,' },
        { t: 'et même un où on est l’un contre l’autre,' },
        { t: 'un morceau brélisien.' },
        { t: 'C’est agréable.' },
      ],
      style: 'bg-pink-600',
    },
    {
      lines: [
        { t: 'Je regarde ses yeux.' },
        {
          t: 'J’adore ses yeux.',
          style: 'text-6xl text-blue-600 custom-animate-heartbeat font-[Caprasimo]',
          hold: 1000,
        },
      ],
    },
    {
      lines: [
        { t: 'Après elle s’en va, je ne la vois plus pendant un moment.' },
        { t: 'Bon, et moi je voulais continuer à danser.' },
        { t: 'J’étais bien, je m’amusais.' },
      ],
    },
    {
      lines: [
        {
          t: 'Et puis j’ai vu qu’elle était revenue.',
        },
        { t: 'Elle était assise avec son amie sur un des canapés entre la piste et le bar.' },
      ],
    },
    {
      lines: [
        {
          t: 'Elle me plaisait bien sûr.',
        },
        {
          t: 'Mais je voulais pas être le relou de service.',
        },
        {
          t: 'Elle avait sûrement pas envie d’un gars qui vienne lui rôder autour alors qu’elle passe une soirée tranquile avec sa pote.',
        },
      ],
    },
    {
      lines: [{ t: 'À un moment, je vais chercher un coca et sa copine me salue de la main.' }],
    },
    {
      lines: [
        { t: 'Je salue aussi, en souriant, je passe.' },
        { t: 'Je ne m’arrête pas, je ne veux pas les embêter.' },
      ],
    },
    {
      lines: [{ t: 'Je repars danser.' }],
    },
    {
      lines: [{ t: 'Le DJ avait passé la main à un groupe live plein d’énergie.' }, { t: 'C’était top.' }],
      style: 'bg-orange-600',
    },
    {
      lines: [
        {
          t: 'Comme ça faisait un moment maintenant, je me suis quand même dit que ça n’était pas trop pesant si j’allais la voir.',
        },
      ],
    },
    {
      lines: [
        {
          t: 'Elle me dit qu’elle se repose un peu.',
        },
        {
          t: 'Ok, pas de soucis.',
        },
        {
          t: 'De toute façon, je ne me fais pas trop d’idées.',
        },
      ],
    },
    {
      lines: [
        {
          t: 'Je danse encore.',
        },
        {
          t: 'Mes deux potes étaient assez ivres maintenant, du coup ils dansaient aussi.',
        },
        {
          t: 'C’était marrant.',
        },
      ],
      style: 'bg-orange-600',
    },
    {
      lines: [
        {
          t: 'Et puis, Franco me dit "Tu aimes bien Jasmiina, non ?"',
        },
        {
          t: 'Je lui dis oui.',
        },
        {
          t: 'Il me montre qu’elle et sa pote sont de nouveau sur la piste, je n’avais pas remarqué.',
        },
      ],
    },
    {
      lines: [{ t: 'Franco me dit' }, { t: '"vas-y"' }, { t: 'J’y vais.', style: 'custom-animate-heartbeat' }],
    },
    {
      lines: [
        { t: 'Jasmiina est contente de me voir.' },
        { t: 'On danse de nouveau en couple, musiques d’amérique du sud ou espagnole.' },
      ],
      style: 'bg-pink-600',
    },
    {
      lines: [{ t: 'Et puis un slow.' }, { t: 'On est l’un contre l’autre.' }],
    },
    {
      lines: [
        { t: 'Elle souris.' },
        { t: 'Je la regarde.' },
        { t: 'Elle me regarde.' },
        { t: 'Nos regards ne fuient pas.' },
      ],
    },
    {
      lines: [
        { t: 'Le slow s’achève.' },
        { t: 'Le morceau suivant n’en est pas un,' },
        { t: 'mais on reste collés l’un à l’autre.' },
      ],
    },
    {
      lines: [
        { t: 'Nos visages se rapprochent,' },
        { t: 'et elle est vraiment belle.', style: 'text-6xl text-blue-600 custom-animate-heartbeat font-[Caprasimo]' },
      ],
    },
    {
      lines: [{ t: 'Je ne peux pas quitter ses yeux du regard.' }, { t: 'Elle, pareil.' }],
    },
    {
      lines: [
        { t: 'Je lui demande si elle veut qu’on s’embrasse.' },
        { t: 'Elle dit peut-être.' },
        { t: 'Je dis qu’on devrait essayer.' },
      ],
    },
    {
      lines: [{ t: 'On s’embrasse.', style: 'custom-animate-blast' }],
    },
    {
      lines: [{ t: 'Je m’imaginais un petit baiser léger.' }],
    },
    {
      lines: [{ t: 'Non', style: 'text-6xl text-blue-600 font-[Caprasimo]' }],
    },
    {
      lines: [
        { t: 'Immédiatement, c’est hyper intense, c’est passionné.' },
        { t: 'On est dedans, complètement, en un instant.' },
      ],
    },
    {
      lines: [{ t: 'La sensation est fantastique, puissante.' }, { t: 'Je ferme les yeux.' }],
    },
    {
      lines: [{ t: 'Un premier baiser, c’est une émotion énorme.' }, { t: 'Un premier baiser, c’est une seule fois.' }],
    },
    {
      lines: [
        {
          t: 'Et c’est pas tous les jours.',
        },
        {
          t: 'La dernière fois que j’ai eu un premier baiser, c’était au siècle dernier.',
        },
      ],
    },
    {
      lines: [{ t: 'Comme on ne danse plus vraiment, on s’assoit dans un canapé.' }],
    },
    {
      lines: [{ t: 'On s’embrasse encore.' }, { t: 'En fait on ne peut pas s’arrêter, c’est vraiment fou.' }],
    },
    {
      lines: [
        { t: 'Elle me demande mon âge.' },
        { t: 'Je ne mens pas.' },
        { t: 'Je lui dis 50.' },
        { t: 'Je me dis que ça va s’arrêter là.' },
      ],
    },
    {
      lines: [{ t: 'Elle me dit qu’elle est plus vieille, 51.' }, { t: 'Je lui dis que j’aurai 51 lundi.' }],
    },
    {
      lines: [{ t: 'Elle sourit.' }, { t: 'Elle est tellement tellement belle.' }],
    },
    {
      lines: [
        {
          t: 'Elle me demande si je suis marié.',
        },
        {
          t: 'Je montre mon alliance.',
        },
        {
          t: 'J’imagine qu’elle l’avait remarquée.',
        },
        {
          t: 'Je lui dis que j’ai perdu Caro il y a un an.',
        },
        {
          t: 'Elle, elle a divorcé il y a deux ans.',
        },
      ],
    },
    {
      lines: [
        {
          t: 'On s’embrasse encore parce que c’est génial',
        },
        {
          t: 'et que ça fait des années que ni l’un ni l’autre n’a eu cette chance.',
        },
      ],
    },
    {
      lines: [
        {
          t: 'Et puis c’est pas comme si on allait se tenir des discours de 2 heures à 20 mètres des enceintes avec nos oreilles de cinquantenaires.',
        },
      ],
    },
    {
      lines: [
        {
          t: 'Elle revient sur mon mariage, elle me demande comment elle peut savoir si je dis la vérité.',
        },
        {
          t: 'Je lui donne deux ou trois détails sur Caro, sur le cancer.',
        },
        {
          t: 'Je crois qu’elle me croit.',
        },
      ],
    },
    {
      lines: [{ t: 'On s’embrasse, on s’embrasse, on s’embrasse.' }],
    },
    {
      lines: [
        { t: 'Tant qu’elle n’a pas envie d’arrêter, il y a aucune chance que j’arrête.' },
        { t: 'Tant que je n’ai pas envie d’arrêter, il y a aucune chance qu’elle arrête.' },
      ],
    },
    {
      lines: [{ t: 'On a complètement vrillés sur ce truc.' }, { t: 'C’est infini.' }],
    },
    {
      lines: [
        {
          t: 'On se caresse aussi.',
        },
        {
          t: 'On se touche les mains, le dos.',
        },
        {
          t: 'Bon sang, l’effet est incroyable, c’est tellement bon.',
        },
      ],
    },
    {
      lines: [
        { t: 'Je le formule en anglais dans ma tête', override: true },
        { t: '"It feels so good, it’s amazing, I cannot believe it"' },
        { t: 'Je vais le lui dire.', override: true },
        { t: 'Elle parle avant, elle dit', override: true },
        { t: '"It feels so good, it’s amazing, I cannot believe it"' },
      ],
    },
    {
      lines: [{ t: 'Et on s’embrasse.' }],
    },
    {
      lines: [
        { t: 'Elle me demande pourquoi je porte toujours mon alliance.' },
        { t: 'Je suis un peu désarçonné.' },
        { t: 'J’explique que c’est dur.' },
        { t: 'J’ai envie de pleurer.' },
      ],
    },
    {
      lines: [{ t: 'Je pleure pas.' }, { t: 'Elle voit que j’ai failli pleurer.' }],
    },
    {
      lines: [{ t: 'On s’embrasse encore.' }],
    },
    {
      lines: [{ t: 'Mes potes et sa pote jettent quelques regards sur nous.' }, { t: 'Ils sont contents pour nous.' }],
    },
    {
      lines: [
        { t: 'On est complèment euphoriques.' },
        {
          t: 'Le shoot de bonheur est énorme.',
          style: 'text-6xl text-blue-600 font-[Caprasimo]',
        },
        { t: 'On rit quand on ne s’embrasse pas.' },
      ],
    },
    {
      lines: [
        {
          t: 'On porte des lunettes tous les deux, elles se choquent sans cesse.',
        },
        {
          t: 'Ça nous fait rire.',
        },
        {
          t: 'Derrière ses lunettes, il y a ses yeux.',
        },
        {
          t: 'Ils sont incroyables.',
          style: 'text-6xl text-blue-600 custom-animate-heartbeat font-[Caprasimo]',
          hold: 1000,
        },
      ],
    },
    {
      lines: [
        { t: 'On s’embrasse dans le cou, la gorge, la nuque.' },
        { t: 'On s’en fiche vraiment des gens autour.' },
      ],
    },
    {
      lines: [
        {
          t: 'On se dit qu’on est comme des ados, c’est drôle.',
        },
        {
          t: 'Deux crétins de 50 ans qui jouent aux ados.',
        },
        {
          t: 'Qui fait ça, sans rire ?',
        },
      ],
    },
    {
      lines: [
        {
          t: 'Je me dis que la dernière fois que j’ai embrassé quelqu’un aussi longtemps d’affilé, j’avais moins de 20 ans.',
        },
      ],
    },
    {
      lines: [{ t: 'On s’embrasse de 2 heures à 3 heures du matin.' }, { t: 'Et puis la boite de nuit ferme.' }],
    },
    {
      lines: [
        {
          t: 'On sort, on se met dans des fauteuils dans le couloir.',
        },
        {
          t: 'On s’embrasse encore de 2 heures à 3 heures du matin',
        },
        {
          t: 'parce qu’on vient de changer de fuseau horaire.',
        },
      ],
    },
    {
      lines: [
        {
          t: 'Une heure de bonheur en plus !',
        },
        {
          t: 'Le temps arrêté pour de vrai, juste pour nous deux.',
        },
        {
          t: 'Pour de vrai.',
        },
        {
          t: 'On a eu ça.',
        },
      ],
    },
    {
      lines: [{ t: 'Elle me dit qu’elle veut aller plus loin.' }],
    },
    {
      lines: [
        { t: 'Nos corps sont déjà en fusion.' },
        { t: 'Je me dis que c’est sûrement la suite logique à tout ça.' },
      ],
    },
    {
      lines: [{ t: 'Je lui dis' }, { t: 'OK' }],
    },
    {
      lines: [{ t: 'En même temps, elle hésite.' }, { t: 'J’hésite moi aussi.' }],
    },
    {
      lines: [
        { t: 'En fait on est trop biens là,' },
        { t: 'l’un contre l’autre,' },
        { t: 'à s’embrasser à l’infini.' },
      ],
    },
    {
      lines: [
        {
          t: 'Qu’est-ce qu’on irait faire dans une cabine sur une banquette exigüe ?',
        },
        {
          t: 'En plus chacun·e de nous partage sa chambre avec un·e pote.',
        },
        {
          t: 'Un peu plus tôt, Franco m’avait fait comprendre qu’il me laissait la chambre si je voulais.',
        },
      ],
    },
    {
      lines: [
        {
          t: 'Mais en fait c’est glauque.',
        },
      ],
    },
    {
      lines: [
        { t: 'Je veux pas le glauque.' },
        { t: 'Je veux la magie.' },
        { t: 'Moi je veux rester avec Jasmiina dans mes bras et qu’on s’embrasse.' },
        { t: 'Elle aussi, elle veut ça !' },
      ],
    },
    {
      lines: [
        {
          t: 'Le pic de bonheur atteint des hauteurs incroyables,',
        },
        {
          t: 'et ça continue,',
        },
        {
          t: 'ça fait vraiment longtemps que j’ai pas vécu un truc qui me fait autant de bien.',
        },
      ],
    },
    {
      lines: [{ t: 'On s’embrasse, c’est fou.' }],
    },
    {
      lines: [{ t: 'Elle me dit que j’embrasse super bien.' }],
    },
    {
      lines: [
        { t: 'Je lui dis que je sais pas,' },
        { t: 'que je n’ai embrassé que deux personnes dans ma vie jusqu’ici.' },
        { t: 'Avant elle.' },
      ],
    },
    {
      lines: [{ t: 'On s’embrasse et on adore ça.' }],
    },
    {
      lines: [
        { t: 'Il est tard.' },
        { t: 'On sait qu’on n’ira pas plus loin que ça.' },
        { t: 'Mais on ne veut pas se quitter.' },
      ],
    },
    {
      lines: [{ t: 'Je propose qu’on échange nos numéros.' }, { t: 'Elle dit que ça ne sert à rien.' }],
    },
    {
      lines: [
        { t: 'Elle a raison.' },
        { t: 'La magie de ce moment n’appartient qu’à ce moment.' },
        { t: 'C’est ça qu’on doit garder.' },
      ],
    },
    {
      lines: [
        {
          t: 'On se dit qu’on doit se rappeller de ça,',
        },
        {
          t: 'que c’était bien,',
        },
        {
          t: 'que ça veut dire que ça peut arriver encore.',
        },
      ],
    },
    {
      lines: [
        { t: 'On croyait chacun que c’était impossible.' },
        { t: 'En fait c’est possible.' },
        { t: 'C’est fou.' },
      ],
    },
    {
      lines: [
        { t: 'Elle me dit que je me souviendrais de cette Finlandaise, et elle de ce Français qui embrasse si bien.' },
        { t: 'Je lui dis ok je suis un cliché.' },
        { t: 'On rit.' },
      ],
    },
    {
      lines: [
        {
          t: 'Je lui dis que si elle veut se coucher, ça va être à elle de le décider,',
        },
        {
          t: 'parce que moi, je pars pas de ce canapé tant qu’elle y est.',
        },
      ],
    },
    {
      lines: [{ t: 'On s’embrasse encore,' }, { t: 'bon sang qu’est-ce qu’on a pu s’embrasser.' }],
    },
    {
      lines: [
        { t: 'Après on se lève,' },
        { t: 'on marche en se tenant par la main,' },
        { t: 'elle a sa cabine sur le pont 8,' },
        { t: 'moi sur le pont 7.' },
      ],
    },
    {
      lines: [
        { t: 'On va au pont 8.' },
        { t: 'On s’embrasse une denière fois en haut des escaliers.' },
        { t: 'On se dit merci.' },
      ],
    },
    {
      lines: [{ t: 'Elle part.' }, { t: 'Lentement.' }, { t: 'Je la regarde.' }, { t: 'Elle ne se retourne pas.' }],
    },
    {
      lines: [{ t: 'Elle est partie.' }, { t: 'Je descends au pont 7.' }],
    },
    {
      lines: [{ t: 'En fait, je veux pas. Je veux encore un baiser.' }],
    },
    {
      lines: [
        { t: 'Je remonte.' },
        { t: 'Je me dis que si moi je remonte, elle va avoir la même idée,' },
        { t: 'revenir sur ses pas.' },
      ],
    },
    {
      lines: [{ t: 'Ça n’arrive qu’au cinéma.' }, { t: 'Elle ne revient pas.' }, { t: 'Je rentre dans ma cabine.' }],
    },
    {
      lines: [
        { t: 'Il est tard, 3 heures du mat.' },
        { t: '4 heures à l’heure finlandaise.' },
        { t: 'Le bateau arrive à 6 heures du mat.' },
      ],
    },
    {
      lines: [
        { t: 'Je me douche, je me couche.' },
        { t: 'Impossible de dormir, tu parles.' },
        { t: 'Je suis shooté, je redescends pas.' },
        { t: 'Je suis tout en haut tout en haut.' },
      ],
    },
    {
      lines: [
        {
          t: 'Le matin c’est dur.',
        },
        {
          t: 'Je dois secouer Franco, il a une belle gueule de bois le pauvre.',
        },
        {
          t: 'Il me fait de la peine.',
        },
      ],
    },
    {
      lines: [
        { t: 'On arrive au port de Stockholm.' },
        { t: 'On sort sur le pont.' },
        { t: 'Il fait froid.' },
        { t: 'On attend que les passerelles soient en place.' },
      ],
    },
    {
      lines: [{ t: 'Je guette, je me dis que je vais la voir.' }, { t: 'Je ne la vois pas.' }],
    },
    {
      lines: [{ t: 'On descend, il y a pleins d’escaliers roulants qui s’enchaînent.' }, { t: 'Je ne la vois pas.' }],
    },
    {
      lines: [
        { t: 'Il y a des paquets de gens dans ce bateau.' },
        { t: 'Il y a pas si longtemps, il m’a semblé qu’on était deux.' },
        { t: 'Je ne la vois pas.' },
      ],
    },
    {
      lines: [{ t: 'On est en bas, il y a un taxi juste devant, on doit aller à la gare.' }],
    },
    {
      lines: [
        { t: 'Je regarde derrière moi avant de monter.' },
        { t: 'J’ai des tas de scénarios en tête.' },
        { t: 'Je vais la voir, je vais l’appeler.' },
        { t: 'Je ne la vois pas.' },
      ],
    },
    {
      lines: [{ t: 'On part.' }],
    },
    {
      lines: [{ t: 'D’un seul coup, je suis triste.' }, { t: 'Un vrai gouffre.' }],
    },
    {
      lines: [{ t: 'Le pic d’hormones est tombé, punaise, ça pique.' }],
    },
    {
      lines: [
        { t: 'La chute libre,' },
        { t: 'pas de parachute,' },
        { t: 'crash imminent.' },
        { t: 'Jusqu’ici, rien ne va.' },
      ],
    },
    {
      lines: [
        { t: 'On arrive à la gare, on se met dans un café.' },
        { t: 'Franco et Jakob sont cramés, trop de bières.' },
      ],
    },
    {
      lines: [
        { t: 'J’ai les larmes qui montent.' },
        { t: 'Je dis à Guido que j’ai besoin qu’il me prenne dans ses bras.' },
        { t: 'Il me prend dans ses bras.' },
        { t: 'Je pleure dans ses bras.' },
      ],
    },
    {
      lines: [{ t: 'Guido aussi a eu des sales coups dans sa vie.' }, { t: 'Il sait ce que je vis.' }],
    },
    {
      lines: [{ t: 'On est debouts dans ce café,' }, { t: 'et je pleure dans les bras de Guido.' }],
    },
    {
      lines: [
        {
          t: 'Malgré leur gueule de bois, mes deux autres potes viennent me taper sur l’épaule.',
        },
        {
          t: 'C’est des bons potes, ils sont tristes pour moi.',
        },
        {
          t: 'Ils savent pour Caro.',
        },
      ],
    },
    {
      lines: [
        {
          t: 'Aussi heureux pendant quelques heures,',
        },
        {
          t: 'et se dire qu’après c’est la tristesse habituelle qui recommence,',
        },
        {
          t: 'c’est prendre un sacré mur la tête la première.',
        },
      ],
    },
    {
      lines: [{ t: 'Après, je suis dans le train.' }, { t: 'Je me dis que j’ai envie de dire tout ça.' }],
    },
    {
      lines: [{ t: 'À qui ?' }, { t: 'À Mat je peux le dire.' }],
    },
    {
      lines: [
        { t: 'Je me dis que je saurais pas le dire.' },
        { t: 'Je l’écris.' },
        { t: 'Je pleure en l’écrivant.' },
        { t: 'Je me relis.' },
      ],
    },
    {
      lines: [{ t: 'Je l’envoie à Mat.' }],
    },
    {
      lines: [{ t: 'Et maintenant je souris.' }],
    },
    {
      lines: [{ t: '.' }],
    },
  ]);

  function handleKey(e: KeyboardEvent) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      previous();
    } else if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      next();
    }
  }

  function parseHash() {
    const [p, l] = location.hash.slice(1).split('/');
    setPageIndex(parseInt(p) || 0);
    setLineIndex(parseInt(l) || 0);
  }

  onMount(() => parseHash());

  $effect(() => {
    location.hash = `#${getPageIndex()}/${getLineIndex()}`;
  });
</script>

<svelte:window on:hashchange={parseHash} />

<svelte:body
  onclick={next}
  onkeydown={handleKey}
/>

<Page page={currentPage()}></Page>
