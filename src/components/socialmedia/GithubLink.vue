<script setup>
import { onMounted, ref } from 'vue'

const username = ref('Muuminuu')
const userProfile = ref(null)
const error = ref(null)


const getUserProfile = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${username.value}`)
    console.log(response)
    const data = await response.json()

    if (response.ok) {
      userProfile.value = data
      error.value = null
    } else {
      userProfile.value = null
      error.value = `Error: ${data.message}`
    }
  } catch (err) {
    console.error('Error fetching data:', err)
    error.value = 'An error occurred while fetching data.'
  }
}

const show = onMounted(() => {
    getUserProfile()
})
console.log(show)
</script>

<template>
        <div class="github-profile-viewer">
            <div v-if="userProfile" class="user-profile">
                <a href="https://github.com/Muuminuu/portFolio/tree/main" target="_blank">
                    <div>
                        <p>{{ userProfile.login }}</p>
                    </div>
                    <div>
                        <img :src="userProfile.avatar_url" :alt="userProfile.login" />
                    </div>
                    <div>
                        Visit my GitHub for real !
                    </div>
                </a>
            </div>
        </div>
</template>

<style scoped>
.github-profile-viewer {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.input-container {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.user-profile {
  margin-top: 20px;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

img {
  width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.user-details {
  text-align: left;
}

p {
  font-size: 16px;
  margin-bottom: 10px;
}

.error-message {
  color: #e74c3c;
  margin-top: 20px;
}
</style>