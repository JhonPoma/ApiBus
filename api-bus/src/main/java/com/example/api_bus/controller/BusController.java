package com.example.api_bus.controller;

import com.example.api_bus.model.Bus;
import com.example.api_bus.repository.BusRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/bus")
public class BusController {
    private final BusRepository busRepository;
    public BusController(BusRepository busRepository){
        this.busRepository=busRepository;
    }

    @GetMapping
    public List<Bus> getAllBuses(){
        return busRepository.findAll();
    }
    @GetMapping("/{id}")
    public Bus getBusById(@PathVariable Long id){
        return busRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bus no encontrado con id " + id));
    }
}
