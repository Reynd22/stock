// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    image: {
        // @ts-ignore
        remoteImages: [
            "http://www.serebii.net/pokemongo/pokemon/*.png",
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/*.png"
        ]
    }

});
