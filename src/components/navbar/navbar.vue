<template>
  <div class="navbar">
    <ul class="nav-list">
      <li class="nav-item">
        <a href="#" class="nav-link" @click="$emit('navigate', 'home')">
          Home
        </a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link" @click="$emit('navigate', 'products')">
          Products
        </a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link" @click="$emit('navigate', 'about')">
          About
        </a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link" @click="$emit('navigate', 'contact')">
          Contact
        </a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link" @click="$emit('navigate', 'cart')">
          Cart (0)
        </a>
      </li>
    </ul>
  </div>
</template>

<script src="./navbar.js" />
