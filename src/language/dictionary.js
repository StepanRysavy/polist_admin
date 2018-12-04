const dictionary = {};

/* eslint-disable */

dictionary.days = {
  0: {
    en: "Monday",
    cs: "pondělí"
  },
  1: {
    en: "Tuesday",
    cs: "úterý"
  },
  2: {
    en: "Wednesday",
    cs: "středa"
  },
  3: {
    en: "Thursday",
    cs: "čtvrtek"
  },
  4: {
    en: "Friday",
    cs: "pátek"
  },
  5: {
    en: "Saturday",
    cs: "sobota"
  },
  6: {
    en: "Sunday",
    cs: "neděle"
  },
  closed: {
    en: "closed",
    cs: "zavřeno"
  },
  open: {
    en: "open",
    cs: "otevřeno"
  },
  opens: {
    en: "opens at",
    cs: "otevírá v"
  },
  opensTomorrow: {
    en: "opens tomorrow at",
    cs: "otevírá zítra v"
  },
  opensDayBefore: {
    en: "opens on",
    cs: "otevírá v"
  },
  opensDayAfter: {
    en: "at",
    cs: "v"
  },
  closes: {
    en: "closes in",
    cs: "zavírá za"
  },
  closesShortly: {
    en: "a few minutes",
    cs: "pár minut"
  },
  closesMinutes: {
    en: "minutes",
    cs: "minut"
  },
};

dictionary.contacts = {
  address: {
    en: "Address",
    cs: "Adresa"
  },
  phone: {
    en: "Phone",
    cs: "Pevná linka"
  },
  mobile: {
    en: "Mobile",
    cs: "Mobil"
  },
  web: {
    en: "Website",
    cs: "Web"
  },
  email: {
    en: "E-mail",
    cs: "Email"
  },
}

dictionary.update = {
  source: {
    en: "Source",
    cs: "Zdroj"
  }
}

dictionary.validate = {
  email: {
    en: "This doesn't look like an email",
    cs: "To nevypadá na email"
  },
  nonEmpty: {
    en: "This shoudn't be empty",
    cs: "Zde by mělo být něco napsané"
  }
}

dictionary.feedback = {
  send: {
    en: "Send feedback",
    cs: "Odeslat"
  },
  headline: {
    en: "This is your error report about",
    cs: "Vaše hlášení o chybě:<br>"
  },
  cta: {
    en: "Report an error",
    cs: "Našli jste chybu?"
  },
  gdpr: {
    en: "Your e-mail will be only used to send you a message if we need some follow-up info or just to let you know, that it has been fixed/resolved. We won't use it ever again and will delete it immediately. Our message will come from the address nasjirak@gmail.com. <a href='#/gdpr'>Read more about how we handle your data.</a>",
    cs: "Váš e-mail bude použit pouze abychom vám mohli poslat zprávu, případně se doptat na dodatečné informace. Poté ho okamžitě smažeme. Odpověď vám dorazí z adresy nasjirak@gmail.com. <a href='#/gdpr'>Podrobnější popis, jak pracujeme s vašimi údaji</a>"
  },
  close: {
    en: "Cancel and close",
    cs: "Zrušit a zavřít"
  },
  messageLabel: {
    en: "What should be fixed?",
    cs: "Co máme upravit?"
  },
  messagePlaceholder: {
    en: "Describe the bug or request",
    cs: "Něco chybí nebo naopak přebývá?"
  },
  emailLabel: {
    en: "Your email, if you want us to reply to you",
    cs: "Váš email, pokud vás máme kontaktovat"
  },
  emailPlaceholder: {
    en: "my@email.com",
    cs: "muj@email.cz"
  },

}

dictionary.perks = {
  wifi: {
    cs: "WIFI",
    en: "WIFI"
  },
  garden: {
    cs: "Zahrádka",
    en: "Garden"
  },
  pets: {
    cs: "Zvírátka",
    en: "Pet Friendly"
  },
  cards: {
    cs: "Platba kartou",
    en: "Accepts cards"
  },
  cheques: {
    cs: "Stravenky",
    en: "Cheques"
  },
  crypto: {
    cs: "Kryproměny",
    en: "Crypto"
  },
  accessible: {
    cs: "Bezbariérové",
    en: "Accessible"
  }
}

dictionary.app = {
  footer: {
    en: "<p>Handpicked events and places in one neighbourhood in Prague<br>that we call home.</p>",
    cs: "<p>Ručně vybírané akce a místa v jedné pražské čtvrti, která je nám domovem.</p>"
  },
  home: {
    en: "Back to the homepage",
    cs: "Zpět na hlavní stránku"
  }
}

dictionary.static = {
  about: {
    en: "<p>We don't aim to be the catalog of everything and we do this in our free time, without any profit. We could use many APIs, but we just don't wanna.</p><p>All data is processed manually, all images taken by us. If other sources are used, they are fully credited.</p><h2>Missing a spot? Or spot a mistake?</h2><p>Send us a note, on world's favorite social media websites, or simply send email to <a href='mailto:hello@nasjirak.cz'>hello@nasjirak.cz</a>, and we will check and fix it.</p>",
    cs: "<p>Netoužíme být katalogem všeho a zároveň to děláme pro zábavu, bez zisku. Mohli bychom využívat API, ale nechceme.</p><p>Všechny údaje zadáváme schválně ručně, jsme autory všech fotek. Pokud využíváme informace z jiných zdrojů, vždy uvedeme odkaz.</p><h2>Chybí vám zde nějaké místo? Nebo jste narazili na chybu?</h2><p>Dejte nám vědět, na sociálních sítích nebo na email <a href='mailto:ahoj@nasjirak.cz'>ahoj@nasjirak.cz</a>. My to ověříme, opravíme.</p>"
  },
  aboutHeadline: {
    en: "About",
    cs: "o webu"
  },
  gdpr: {
    en: "<p>We do our best to protect private data, so that is why we don't store any. Yes, that is an option. We don't do ads, targeting, profiling. Everything on the site comes from public sources, the websites or facebook pages, or from interviews.</p><h2>What about the e-mail in feedback form?</h2><p>Good question. First, it's optional, <strong>you don't need to fill it</strong> in. Second, if you include it, we will use it only for the communication about the issue you reported. The e-mail will be removed from the database the minute your issue is resolved. <strong>We won't store it</strong> a minute longer. We won't use it ever again. We won't remember if you ever asked us about some other topic before (unless YoU HavE a SpECiFic Unf0rgeTTablE wAY oF WRitiNG, we cannot erase that from our minds. But it's hard to break in there as well).</p><h2>What about cookies?</h2><p>There will be only one cookie we will use, and that is to remember your preferred language.</p><h2>What about analytics?</h2><p>We only use basic Google Analytics to see, if anybody uses the site. We won't use techniques to do advanced user profiling. It would be interesting to know, but there is absolutely no need for that. So we won't do it.</p><h2>Need to know more?</h2><p>You can always contact us at <a href='mailto: hello@nasjirak.cz'>hello@nasjirak.cz</a></p>",
    cs: "<p>Děláme maximum, abychom ochránili vaše data - proto žádná neukládáme. Jo, i to je volba. Nemáme reklamu, necílíme obsah, neděláme profily uživatelů. Všechno na webu je z veřejně dostupných zdrojů, webů, facebook stránek nebo přímých rozhovorů a vždy uvádíme zdroje.</p><h2>A co e-maily ve formuláři?</h2><p>To je dobrá otázka. Zaprvé, e-mail je volitelný, <strong>takže není potřeba ho vyplnit.</strong> A zadruhé, pokud ho zadáte, použijeme ho pouze ke komunikaci o daném problému. Jakmile šetření skončí, bude okamžitě vymazán. <strong>Prostě ho neukládáme.</strong> A už ho nikdy nepoužijeme. Nebudeme si pamatovat, že jsme spolu již komunikovali (za předpokladu, že nepíšete VyPAtlÁt0reM, to asi zůstane zaryté v paměti).</p><h2>A co cookies?</h2><p>Jediný údaj, který ukládáme do vašeho počítače, je jazyk, který si vyberete. A protože jsou cookies ve vašem prohlížeči, můžete je vypnout, smazat, cokoli.</p><h2>A co vyhodnocování návštěvnosti?</h2><p>Budeme používat základní verzi Google Analytics, abychom věděli, zda web vůbec někdo používá. Nebudeme dělat personalizaci, remarketing, ani prodávat reklamní prostor. Jako asi bychom se dozvěděli zajímavé informace, ale ta data jsou nám jinak k ničemu.</p><h2>Potřebujete se ještě zeptat?</h2><p>Žádný problém, napište nám na <a href='mailto:ahoj@nasjirak.cz'>ahoj@nasjirak.cz</a></p>"
  },
  gdprHeadline: {
    en: "GDPR",
    cs: "GDPR"
  }
}

dictionary.search = {
  headline: {
    en: "All venues",
    cs: "Všechny podniky"
  }
}

dictionary.events = {
  home: {
    en: 'Events',
    cs: 'Akce na Jiřáku'
  },
  ec: {
    en: 'Event',
    cs: 'Akce'
  },
  all: {
    en: 'All events',
    cs: 'Všechny akce'
  }
}

dictionary.embeds = {
  instagram: {
    en: 'These images originate from Instagram and were taken by ',
    cs: 'Obrázky pochází z Instagramu, najdete je na profilu '
  },
  instagramRules: {
    en: 'Dispaying these images follows the Terms and Rules of embeding images from ',
    cs: 'Obrázky uveřejňujeme v souladu s podmínkami a pravidly pro sdílení obrázků sítě '
  }
}

export default dictionary;

/* eslint-enable */
