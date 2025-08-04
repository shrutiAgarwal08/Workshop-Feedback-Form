package com.workshop.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.workshop.dao.FeedbackRepository;
import com.workshop.entity.Feedback;
@Service
public class FeedbackServiceImpl implements FeedbackService{
	@Autowired
	private FeedbackRepository Repo;
	@Override
	public Feedback savefeedback(Feedback feedback) {
		return Repo.save(feedback);                 }
	@Override
	public List<Feedback> getallfeedbacks() {
		return Repo.findAll();              }
	@Override
	public void deleteFeedbackById(int id) {
		Repo.deleteById(id);	           }}