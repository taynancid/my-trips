import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render with no marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Fortaleza',
      sliug: 'fortaleza',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const place2 = {
      id: '2',
      name: 'Reykjavik',
      sliug: 'reykjavik',
      location: {
        latitude: 129,
        longitude: -50
      }
    }

    render(<Map places={[place, place2]} />)

    expect(screen.getByTitle(/fortaleza/i)).toBeInTheDocument()
    expect(screen.getByTitle(/reykjavik/i)).toBeInTheDocument()
  })
})
