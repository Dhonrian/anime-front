<template>
  <div>
    <form @submit.prevent='cadastrar'>
      <h2>Animes</h2>
      <div class='form-group'>
        <label for='titulo'>Título Anime</label>
        <input type='text' id='titulo' class='form-control' required autofocus v-model='nome' />
      </div>
      <div class='form-group'>
        <label for='anime'>Personagem</label>
        <textarea id='anime' class='form-control' required v-model='personagem'></textarea>
      </div>
      <button class='btn btn-lg btn-primary btn-block' type='submit'>Salvar</button>
    </form>
    <br />
    <table class='table table-striped'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Personagem</th>
          <th>Data/hora</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='anime in animes' :key='anime.id'>
          <td>{{ anime.id }}</td>
          <td>{{ anime.animeNome }}</td>
          <td>{{ anime.animePersonagem }}</td>
          <td>{{ anime.animeAno }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'anotacoes',
  data () {
    return {
      nome: '',
      personagem: '',
      animes: []
    }
  },
  computed: {
    ...mapState(['usuario'])
  },
  methods: {
    cadastrar () {
      axios
        .post('anime/novo', {
          usuario: this.usuario,
          animeNome: this.nome,
          animePersonagem: this.personagem
        })
        .then((res) => {
          console.log(res)
          this.nome = ''
          this.personagem = ''
          this.atualizar()
        })
        .catch((error) => console.log(error))
    },
    atualizar () {
      axios
        .get('/anime/busca/' + this.usuario, {
          headers: { Accept: 'application/json' }
        })
        .then((res) => {
          console.log(res)
          this.animes = res.data
        })
        .catch((error) => console.log(error))
    }
  },
  created () {
    this.atualizar()
  }
}
</script>