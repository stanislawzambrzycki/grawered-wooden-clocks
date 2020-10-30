<template>
  <div class="hamburger-menu">
    <div class="menu-btn" @click="toggleMenu">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>
  </div>

  <div class="menu">
    <ul class="menu-nav">
      <li :class="main ? 'nav-item current' : 'nav-item'">
        <a
          href="#"
          class="nav-link"
          @click="$emit('navigate', 'home'), toggleMenu()"
          >Home
        </a>
      </li>

      <li :class="products ? 'nav-item current' : 'nav-item'">
        <a
          href="#"
          class="nav-link"
          @click="$emit('navigate', 'Products'), toggleMenu()"
          >Products
        </a>
      </li>

      <li :class="about ? 'nav-item current' : 'nav-item'">
        <a
          href="#"
          class="nav-link"
          @click="$emit('navigate', 'about'), toggleMenu()"
          >About
        </a>
      </li>

      <li :class="contact ? 'nav-item current' : 'nav-item'">
        <a
          href="#"
          class="nav-link"
          @click="$emit('navigate', 'contact'), toggleMenu()"
          >Contact
        </a>
      </li>
    </ul>
  </div>
</template>

<script src="./menu.js" />
