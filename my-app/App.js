import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Image source={require('./images/logo.png')} style={styles.logo} />
        {/* Navigation menu goes here */}
      </View>

      <Text style={styles.contacto}>
        "En la vida, a menudo son los pequeños detalles los que terminan siendo los más importantes"
      </Text>

      {/* Slider */}
      {/* You can use a library like 'react-native-snap-carousel' for the slider. */}
      {/* Replace the following with your slider component */}
      <View style={styles.sliderItem}>
        <Image source={require('./images/galeria/photo-2.png')} style={styles.sliderImage} />
      </View>
      {/* Repeat the above View for each slider item */}

      <View style={styles.wrapper}>
        {/* Left decoration */}
        {/* Right decoration */}
        <View style={styles.containerContacto}>
          <View style={styles.columnFindesemana}>
            <View style={styles.direccionContacto}>
              <Text style={styles.direccionLarge}>
                C/ Sequía de Rascanya, 2 46470 Catarroja Valencia
              </Text>
              <Text style={styles.direccionSmall}>
                C/ Sequía de Rascanya, 2
                {"\n"}
                46470 Catarroja Valencia
              </Text>
            </View>
            <View style={styles.mapaWrapper}>
              {/* Google Maps iframe */}
            </View>
            <View style={styles.comoLlegarBtn}>
              <Text style={styles.comoLlegarText}>CÓMO LLEGAR</Text>
            </View>
            <View style={styles.horarioReservaWrapper}>
              <View style={styles.horarioContacto}>
                <Text style={styles.horarioTitle}>HORARIO DE APERTURA</Text>
                {/* Opening hours */}
              </View>
              <View style={styles.reservaContacto}>
                <Text style={styles.reservatlf}>638 85 72 94</Text>
                <View style={styles.reservarBtn}>
                  <Text style={styles.reservarText}>RESERVA YA</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Image source={require('./images/logo.png')} style={styles.logo} />
        <Text style={styles.direccionLarge}>C/ Sequía de Rascanya, 2 46470 Catarroja Valencia</Text>
        <Text style={styles.direccionSmall}>C/ Sequía de Rascanya, 2{"\n"}46470 Catarroja Valencia</Text>
        <Text style={styles.tlf}>638 85 72 94</Text>
        <View style={styles.socialLinks}>
          {/* Social media icons */}
        </View>
        <View style={styles.configuracion}>
          {/* Settings icon */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Define your styles here
});

export default App;
