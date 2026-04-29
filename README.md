# Toks Particle Simulator
This is the Toks particle simulator. It works off a very simple paradigm:

1. Each particle is a separate entity.
2. Each particle tries to match its velocity to the particles nearest it.
3. Theoretically, if all goes well, all the particles end up individually agreeing on one public direction.

# Iterations & Settings
Different settings & iterations have changed how the particles behave:

- **Normalization**: The particle's velocity will have a constant *magnitude*, with only its direction changing.
- **Wrap vs Bounce**: The particles wrap around the screen or bounce of the edges of the screen. Changing these settings often changes the group's overall behavior.
- **Types**: Particles can be set to have different `types` (based on their color), and can be set to only react to particles of a similar type.

# Unfinished Iterations
- **Colors**: Each particle tries to match its neighbor's color
- **Vortex**: Figure out an algorithm that will result in a vortex of particles.
